// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use serde::Serialize;
use chrono::Utc;
use serde_json::json;
use std::path::PathBuf;


fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      check_setup,
      create_setup,
      get_all_files,
      create_folder,
      create_file_json,
      get_file_content,
      save_file_content
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
#[derive(Serialize)]
struct FileInfo {
    filename: String,
    extension: Option<String>,
    path: String,
    children: Option<Vec<FileInfo>>,
}

#[tauri::command]
async fn get_all_files() -> Option<Vec<FileInfo>> {
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

    // Recursively collect files and folders
    let mut file_info_vec = Vec::new();
    collect_files_and_folders(&path, &mut file_info_vec);
    Some(file_info_vec)
}
fn collect_files_and_folders(path: &str, file_info_vec: &mut Vec<FileInfo>) {
    if let Ok(entries) = std::fs::read_dir(path) {
        let mut folders = Vec::new();
        let mut files = Vec::new();

        for entry in entries {
            if let Ok(entry) = entry {
                let file_type = entry.file_type().unwrap();
                let file_path = entry.path();

                // Get the file name without the extension
                let filename = file_path.file_stem().unwrap().to_string_lossy().into_owned();

                // Skip .DS_Store files
                if filename == ".DS_Store" {
                    continue;
                }

                let extension = if file_type.is_file() {
                    file_path.extension().map(|ext| ext.to_string_lossy().into_owned())
                } else if file_type.is_dir() {
                    Some("folder".to_string())
                } else {
                    None
                };

                let mut file_info = FileInfo {
                    filename: filename.clone(),
                    extension,
                    path: file_path.to_string_lossy().into_owned(),
                    children: None,
                };

                if file_type.is_dir() {
                    // Recursively collect files and folders from subdirectories
                    let mut children = Vec::new();
                    collect_files_and_folders(&file_info.path, &mut children);
                    file_info.children = Some(children);

                    // Collect folders separately
                    folders.push(file_info);
                } else {
                    // Collect files separately
                    files.push(file_info);
                }
            }
        }

        // Sort files by creation time
        files.sort_by_key(|file_info| {
            std::fs::metadata(&file_info.path)
                .and_then(|metadata| metadata.created())
                .unwrap_or(std::time::SystemTime::UNIX_EPOCH)
        });

        // Push folders first, then files
        file_info_vec.extend(folders);
        file_info_vec.extend(files);
    }
}


#[tauri::command]
async fn create_folder() {
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

    // Add new folder to the path. so it goes new_folder[1], new_folder[2], etc.
    let folders = std::fs::read_dir(path).unwrap();
    let mut count = 0;
    for folder in folders {
        if let Ok(folder) = folder {
            if folder.path().is_dir() {
                count += 1;
            }
        }
    }

    let new_folder = std::fs::create_dir(format!("{}/Untitled {}", path, count));

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

    let new_file = std::fs::write(
      format!("{}/Untitled {}.json", path, count),
      format!(
          "{{\n  \"dateCreated\": \"{}\",\n  \"content\": \"\",\n  \"dateModified\": \"{}\"\n}}",
          Utc::now().to_rfc3339(),
          Utc::now().to_rfc3339()
      ),
  );

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
      return {
        String::from("Failed to read file content")
      };
    }
  }
}

#[tauri::command]
async fn save_file_content(path: String, content: String, name: String) {
    // Serialize the content string into a JSON value
    let json_content = json!(content);

    // Update file content
    let new_file = std::fs::write(
        format!("{}", path),
        format!(
            "{{\n  \"dateCreated\": \"{}\",\n  \"content\": {},\n  \"dateModified\": \"{}\"\n}}",
            Utc::now().to_rfc3339(),
            json_content.to_string(),
            Utc::now().to_rfc3339()
        ),
    );

    match new_file {
        Ok(_) => {
            println!("File content updated");
        },
        Err(_) => {
            println!("Failed to update file content");
        }
    }
}