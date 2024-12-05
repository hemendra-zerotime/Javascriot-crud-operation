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
            alert("your task has been added succesfully")
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
            alert("your task has been added succesfully")
            return
        }

    }
}


