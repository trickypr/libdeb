var searchIndex = JSON.parse('{\
"deb_rs":{"doc":"A library for handling debian files and other tasks …","i":[[0,"shared","deb_rs","",null,null],[3,"PackageWithVersion","deb_rs::shared","",null,null],[12,"name","","",0,null],[12,"version","","",0,null],[12,"binding","","",0,null],[5,"paragraph_contains","","",null,[[["paragraph",3],["string",3]],[["option",4],["field",3]]]],[4,"VersionBinding","","",null,null],[13,"LessThan","","",1,null],[13,"GreaterThan","","",1,null],[13,"LessThanOrEqual","","",1,null],[13,"GreaterThanOrEqual","","",1,null],[13,"Equal","","",1,null],[13,"Any","","",1,null],[13,"Unknown","","",1,null],[0,"file","deb_rs","",null,null],[3,"PathItem","deb_rs::file","",null,null],[12,"real","","",2,null],[12,"move_to","","",2,null],[4,"Version","","",null,null],[13,"V1_0","","",3,null],[13,"V2_0","","",3,null],[13,"VUnknown","","",3,null],[3,"Control","","Type doc: …",null,null],[12,"package","","",4,null],[12,"source","","",4,null],[12,"version","","",4,null],[12,"section","","",4,null],[12,"priority","","",4,null],[12,"architecture","","",4,null],[12,"essential","","",4,null],[12,"install_size","","",4,null],[12,"maintainer","","",4,null],[12,"description","","",4,null],[12,"homepage","","",4,null],[12,"built_using","","",4,null],[12,"depends","","",4,null],[12,"pre_depends","","",4,null],[12,"recommends","","",4,null],[12,"suggests","","",4,null],[12,"enhances","","",4,null],[12,"breaks","","",4,null],[12,"conflicts","","",4,null],[3,"Deb","","This is the struct that should be used to parse <code>.deb</code> …",null,null],[12,"extracted_path","","",5,null],[5,"extract","","",null,[[],[["string",3],["error",3],["result",4]]]],[11,"from","deb_rs::shared","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","deb_rs::file","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"vzip","","",2,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"clone","deb_rs::shared","",0,[[],["packagewithversion",3]]],[11,"clone","","",1,[[],["versionbinding",4]]],[11,"clone","deb_rs::file","",2,[[],["pathitem",3]]],[11,"clone","","",3,[[],["version",4]]],[11,"clone","","",4,[[],["control",3]]],[11,"eq","deb_rs::shared","",0,[[["packagewithversion",3]]]],[11,"ne","","",0,[[["packagewithversion",3]]]],[11,"eq","","",1,[[["versionbinding",4]]]],[11,"eq","deb_rs::file","",2,[[["pathitem",3]]]],[11,"ne","","",2,[[["pathitem",3]]]],[11,"eq","","",3,[[["version",4]]]],[11,"eq","","",4,[[["control",3]]]],[11,"ne","","",4,[[["control",3]]]],[11,"fmt","deb_rs::shared","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","deb_rs::file","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"from_str","deb_rs::shared","",0,[[]]],[11,"from_str","","",1,[[]]],[11,"new","deb_rs::file","",5,[[]]],[11,"extract","","Extracts the deb file into a set of individual files",5,[[],[["result",4],["error",3]]]],[11,"version","","Returns the version of the deb file. Note that the …",5,[[],[["error",3],["version",4],["result",4]]]],[11,"install_tree","","@todo Docs for this function",5,[[],[["result",4],["error",3],["vec",3]]]],[11,"retrieve_control","","@todo Docs for this function",5,[[],[["result",4],["control",3],["error",3]]]]],"p":[[3,"PackageWithVersion"],[4,"VersionBinding"],[3,"PathItem"],[4,"Version"],[3,"Control"],[3,"Deb"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);