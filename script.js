let task = []
let d = new Date()
function addTask() {
    let taskname, descript;
    taskname = document.querySelector("#tname").value
    descript = document.querySelector("#tdescription").value
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

    if (Object.keys(localStorage).includes("taskData")) {
        document.querySelector('#taskli').href = "./todo.html"
    }
    else {
        document.querySelector('#taskli').href = "./no.html"
    }
}

function readData() {
    let container = document.querySelector(".allnotes")
    let cardcontainer = document.querySelector(".card")
    task = JSON.parse(localStorage.getItem("taskData"))

    if (Object.keys(localStorage).includes("taskData")) {
        document.querySelector(".card-title").innerHTML = task[0].tname
        document.querySelector(".card-text").innerHTML = task[0].description
        document.querySelector(".date").innerHTML = task[0].date
        document.querySelector(".pen").addEventListener("click", function () {
            localStorage.setItem("id", `${this.id}`)
            editTask()
        })
        document.querySelector(".del").addEventListener("click", function () {
            deleteTask(this.id)
        })
        for (let ind = 1; ind < task.length; ind++) {
            let clonedContainer = cardcontainer.cloneNode(true)
            clonedContainer.querySelector(".card-title").innerHTML = `${task[ind].tname}`
            clonedContainer.querySelector(".card-text").innerHTML = `${task[ind].description}`
            clonedContainer.querySelector(".date").innerHTML = `${task[ind].date}`
            clonedContainer.querySelector(".pen").id = ind
            clonedContainer.querySelector(".pen").addEventListener("click", function () {
                localStorage.setItem("id", `${this.id}`)
                editTask()
            });
            clonedContainer.querySelector(".del").addEventListener("click", function () {
                deleteTask(ind)
            })

            container.appendChild(clonedContainer)
        }
    }
}

function editTask() {
    location.href = "./Edit.html"
}

function getData() {
    task = JSON.parse(localStorage.getItem("taskData"))
    ind = localStorage.getItem("id")
    if (ind) {
        document.querySelector("#utname").value = task[ind].tname
        document.querySelector("#utdescription").value = task[ind].description
    }
    else {
        return
    }

}

function updateTask() {
    task = JSON.parse(localStorage.getItem("taskData"))
    ind = localStorage.getItem("id")
    if (ind) {
        taskname = document.querySelector("#utname").value
        descript = document.querySelector("#utdescription").value
        update = {
            tname: taskname,
            description: descript,
            date: `Edit on ${d.toDateString()}`
        }
        task[ind] = update
        localStorage.setItem("taskData", JSON.stringify(task))
        localStorage.removeItem("id")
        alert("data update")
    }

}

function deleteTask(vl) {
    // let str = vl.toString()
    // console.log(str.charAt(1))
    task = JSON.parse(localStorage.getItem("taskData"))
    if (vl === "number") {
        let str = vl.toString()
        let del = task.shift()
        localStorage.setItem("taskData", JSON.stringify(del))
    }
    else {
        let del = task.splice(vl, vl)
        localStorage.setItem("taskData", JSON.stringify(task))
        location.reload()

    }

}