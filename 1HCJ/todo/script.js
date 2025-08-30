const taskList = []
const listElement = document.getElementById("taskList")
const statusText = document.getElementById("status")

// speach recognition
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
const recognition = new speechRecognition()
recognition.continuous = false
recognition.lang='en-US'

recognition.onresult =(event)=>{
    const transcript = event.results[0][0].transcript.toLowerCase()
    statusText.innerText = `Heard: "${transcript}"`
    if(transcript.startsWith("naya task")){
        const taskText = transcript.replace("naya task", "").trime()
        if(taskText){
            addTask(taskText)
        }
    }
    else if(transcript.startsWith("delete task")){

        const num = parseInt (transcript.split("")[2]) -1
        if(!isNaN(num))
            delete(num)
    }
    else if(transcript.startsWith("mark task")){
        const num = parseInt(transcript.split("")[2]) -1
        if(!isNaN(num))
            markTaskDone(num)
    }
}
function addTask(task){
    taskList.push({text:task,done:false})
    renderTasks()
}

function deleteTask(num){
    if(taskList[num]){
        taskList.splice(num,1)
        renderTasks
    }
}

function markTaskDone(num){
    if(taskList[num]){
        taskList[num].done = true
        renderTasks()
    }
}
function renderTasks(){
    listElement.innerHTML= ""
    taskList.forEach((task,idx)=>{
        const li = document.createElement("li")
        li.innerText = `${idx+1}. ${task.text} ${task.done ? "✅" : ""}`
        listElement.appendChild(li)
    })
}

function startVoice(){
    statusText.innerText = "Listening..."
    recognition.start()
}

document.getElementById("startBtn").addEventListener("click", startVoice)