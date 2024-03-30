// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use serde::Serialize;
fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      check_setup,
      create_setup,
      get_all_files,
      create_folder,
      create_file_json,
      get_file_content
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

#[derive(serde::Serialize)]
struct FileInfo {
    filename: String,
    extension: Option<String>,
    path: String,
}

#[tauri::command]
async fn get_all_files() -> Option<Vec<FileInfo>> {
    // ... (previous code)
    println!("Getting all files");
    // Read setup.json
    let content = match std::fs::read_to_string("setup.json") {
        Ok(content) => content,
        Err(_) => {
            println!("Failed to read setup file");
            return None;
        }
    };

    // Parse JSON content
    let json: serde_json::Value = match serde_json::from_str(&content) {
        Ok(json) => json,
        Err(_) => {
            println!("Failed to parse JSON content");
            return None;
        }
    };

    // Get path from JSON
    let path = match json["path"].as_str() {
        Some(path) => path,
        None => {
            println!("'path' key not found in JSON");
            return None;
        }
    };
    // Read files from the obtained path
    std::fs::read_dir(path)
        .map_or_else(
            |err| {
                println!("Failed to read directory '{}': {}", path, err);
                None
            },
            |paths| {
                Some(
                    paths.filter_map(|entry| {
                        entry.ok().and_then(|e| {
                            let path = e.path();
                            let filename = path.file_stem()?.to_string_lossy().into_owned();
                            let extension = path.extension()?.to_string_lossy().into_owned();
                            let content = std::fs::read_to_string(&path).unwrap();
                            Some(FileInfo {
                                filename,
                                extension: Some(extension),
                                path: path.to_string_lossy().into_owned(),

                            })
                        })
                    })
                    .collect(),
                )
            },
        )
}

#[tauri::command]
async fn create_folder(path: String) {
  let new_folder = std::fs::create_dir_all(path);
  match new_folder {
    Ok(_) => {
      println!("New folder created");
    },
    Err(_) => {
      println!("Failed to create new folder");
    }
  }
}

#[tauri::command]
async fn create_file_json() {
    // Read setup.json
    let content = match std::fs::read_to_string("setup.json") {
        Ok(content) => content,
        Err(_) => {
            println!("Failed to read setup file");
            return;
        }
    };

    // Parse JSON content
    let json: serde_json::Value = match serde_json::from_str(&content) {
        Ok(json) => json,
        Err(_) => {
            println!("Failed to parse JSON content");
            return;
        }
    };

    // Get path from JSON
    let path = match json["path"].as_str() {
        Some(path) => path,
        None => {
            println!("'path' key not found in JSON");
            return;
        }
    };

    // Add new file to the path. so it goes new_file[1].json, new_file[2].json, etc.
    let files = std::fs::read_dir(path).unwrap();
    let mut count = 0;
    for file in files {
        if let Ok(file) = file {
            if let Some(extension) = file.path().extension() {
                if extension == "json" {
                    count += 1;
                }
            }
        }
    }

    let new_file = std::fs::write(format!("{}/new_file[{}].json", path, count), "{}");
    match new_file {
        Ok(_) => {
            println!("New file created");
        },
        Err(_) => {
            println!("Failed to create new file");
        }
    }
}

// remember to call `.manage(MyState::default())`
#[tauri::command]
async fn get_file_content(path: String) -> String {
  // read file content
  let file_content = std::fs::read_to_string(path);
  match file_content {
    Ok(content) => {
      println!("File content read");
      return content;
    },
    Err(_) => {
      println!("Failed to read file content");
      return String::from("Failed to read file content");
    }
  }
}
