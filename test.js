const greet = require(',/app')

if (greet()==="hello from devops!"){
    console.log("✔ test passed")
    Process.exit(0)
}
else{
    console.log("❌test failled")
    Process.exit(1)
}
