// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use serde::Serialize;
fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      check_setup,
      create_setup
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}


// remember to call `.manage(MyState::default())`
// #[derive(serde::Serialize)]


#[tauri::command]
async fn check_setup() -> String {
  // read setup.json file
  let setup_file = std::fs::read_to_string("setup.json");
  match setup_file {
    Ok(content) => {
      println!("Setup file read");
      return content;
    },
    Err(_) => {
      println!("Failed to read setup file");
      return String::from("Failed to read setup file");
    }
  }
}

#[tauri::command]
async fn create_setup(path: String, name: String) {
  // create setup.json file in the same dir as executable
  create_setup_file().await;
  // write path to setup.json file
  let setup_file = std::fs::write("setup.json", format!("{{\"path\": \"{}\"}}", path));

  match setup_file {
    Ok(_) => {
      println!("Path written to setup file");
    },
    Err(_) => {
      println!("Failed to write path to setup file");
    }
  }

  // create a new folder in the path
  let new_folder = std::fs::create_dir_all(format!("{}/{}", path, name));
  match new_folder {
    Ok(_) => {
      println!("New folder created");
      let setup_file = std::fs::write("setup.json", format!("{{\"path\": \"{}/{}\"}}", path, name));
    },
    Err(_) => {
      println!("Failed to create new folder");
    }
  }
}


async fn create_setup_file() {
  // if setup file already exists, return otherwise create it
  let setup_file = std::fs::read_to_string("setup.json");
  match setup_file {
    Ok(_) => {
      println!("Setup file already exists");
      return;
    },
    Err(_) => {
      println!("Setup file does not exist, creating it");
    }
  }


}