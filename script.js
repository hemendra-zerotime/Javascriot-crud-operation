let task = []
function addTask() {
    let taskname, descript, date;
    taskname = document.querySelector("#tname").value
    descript = document.querySelector("#tdescription").value
    d = new Date()
    console.log(d.toDateString())
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
            date: d.toDateString()
        }
        if (localStorage.length == 0) {
            task.push(obj)
            localStorage.setItem("taskData", JSON.stringify(task))
            alert("your task has been added successfully")
        }

        else if (localStorage.length > 0) {
            task = JSON.parse(localStorage.getItem("taskData"))
            for (let ind = 0; ind < task.length; ind++) {
                if (task[ind].tname === taskname && task[ind].date) {
                    alert(`This task is already added by you on ${task[ind].date} please add diffrent task`)
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
    document.querySelector(".date").innerHTML = `${task[0].date}`
}

function editTask() {
    console.log("i will edit")
}

function deleteTask() {
    console.log("i will delete")
}