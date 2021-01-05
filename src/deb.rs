// TODO: Refactor this entire file. 300 lines is too long

use std::{
    fs,
    io::{Error, ErrorKind},
};

extern crate yaml_rust;
use glob::glob;
use yaml_rust::YamlLoader;

use crate::extractor::extract;

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum VersionBinding {
    LessThan,
    GreaterThan,
    LessThanOrEqual,
    GreaterThanOrEqual,
    Equal,
    Any,
    Unknown,
}

impl VersionBinding {
    fn from_str(s: &str) -> Self {
        let s = s.split(" ").collect::<Vec<&str>>()[0];

        match s {
            ">" => VersionBinding::GreaterThan,
            "<" => VersionBinding::LessThan,
            ">=" => VersionBinding::GreaterThanOrEqual,
            "<=" => VersionBinding::LessThanOrEqual,
            "=" => VersionBinding::Equal,
            _ => VersionBinding::Unknown,
        }
    }
}
