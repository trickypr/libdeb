use std::io::{Error, ErrorKind};

use run_script::ScriptOptions;
use uuid::Uuid;

pub fn extract(archive_path: &str) -> Result<String, Error> {
    // Generates a unique id to stop this from conflicting
    let output = format!("/tmp/libdeb/{}/", Uuid::new_v4());

    if cfg!(target_os = "windows") {
        // We don't support windows
        return Err(Error::new(
            ErrorKind::Other,
            "The target_os windows is not supported. Please only use on linux",
        ));
    } else {
        let data_archive = format!("{}data.tar.xz", &output);
        let data_extract = format!("{}data/", &output);

        let control_archive = format!("{}control.tar.xz", &output);
        let control_extract = format!("{}control/", &output);

        let _ = run_script::run(
            &format!(
                "
        mkdir -p {};
        mkdir -p {};
        mkdir -p {};

        ar -x {} --output={};
        tar -xf {} -C {};
        tar -xf {} -C {};
        ",
                output,
                data_extract,
                control_extract,
                archive_path,
                output,
                data_archive,
                data_extract,
                control_archive,
                control_extract
            ),
            &vec![],
            &ScriptOptions::new(),
        );

        // if run_cmd! {
        //     mkdir -p ${output};
        //     mkdir -p ${data_extract};
        //     mkdir -p ${control_extract};

        //     ar -x ${archive_path} --output=${output};
        //     tar -xf ${data_archive} -C ${data_extract};
        //     tar -xf ${control_archive} -C ${control_extract};
        // }
        // .is_err()
        // {
        //     return Err(Error::new(ErrorKind::Other, "Error extracting files"));
        // }
    }

    Ok(output)
}
