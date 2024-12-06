let task = []
function addTask() {
    let taskname, descript;
    taskname = document.querySelector("#tname").value
    descript = document.querySelector("#tdescription").value

    if (taskname === "") {
        alert("Please Enter Task Name")
    }
    else if (descript === "") {
        alert("Please Enter Task Description")
    }
    else {
        let obj = {
            tname: taskname,
            description: descript,
        }
        if (localStorage.length == 0) {
            task.push(obj)
            localStorage.setItem("taskData", JSON.stringify(task))
            alert("your task has been added successfully")
        }

        else if (localStorage.length > 0) {
            task = JSON.parse(localStorage.getItem("taskData"))
            for (let ind = 0; ind < task.length; ind++) {
                if (task[ind].tname === taskname) {
                    alert("this task is already added by you")
                    return
                }
            }
            task.push(obj)
            localStorage.setItem("taskData", JSON.stringify(task))
            alert("your task has been added successfully")
            return
        }

    }
}

function viewTask() {
    document.querySelector('#taskli').href = "./todo.html"
}

function readData() {
    task = JSON.parse(localStorage.getItem("taskData"))
    let Taskname = task[0].tname
    console.log(Taskname)
    document.querySelector(".card-title").innerHTML = `${task[0].tname}`
    document.querySelector(".card-text").innerHTML = `${task[0].description}`
}
