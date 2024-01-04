// logical operators

var isAdmin = NaN;
var haveLicense = null;

// when using && operator both condition must be true
if (isAdmin && haveLicense) {
  console.log("Admin have license");
} else {
  console.log("Admin dont' have license");
}

if (isAdmin || haveLicense) {
  console.log("Admin may be have license");
} else {
  console.log("its not an admin");
}


if (!isAdmin) {
    console.log("Its a user");
}else {
    console.log("its an admin");
}