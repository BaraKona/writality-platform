// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      check_setup
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}


// remember to call `.manage(MyState::default())`
#[tauri::command]
async fn check_setup() -> bool {
  // check if setup.json file exists in the same dir as executable and return true or false
  let setup_file = std::fs::read_to_string("setup.json");
  match setup_file {
    Ok(_) => {
      println!("Setup file found");
      true
    },
    Err(_) => {
      println!("Setup file not found");
      false
    }
  }
}

async fn create_setup_file(
  path: String
) {
  // create setup.json file in the same dir as executable
  let setup_file = std::fs::write("setup.json", "{}");
  match setup_file {
    Ok(_) => {
      println!("Setup file created");
    },
    Err(_) => {
      println!("Failed to create setup file");
    }
  }
}