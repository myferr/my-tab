const body = document.getElementById("webview-container");

function webview(Content) {
    return Content;
}

let name = localStorage.getItem("name");

function registerAccount() {
    const username = document.getElementById("usernameInput").value;
    localStorage.setItem("name", username);
    if (localStorage.getItem("name").length > 2) {
        window.location.reload();
    } else {
        document.getElementById("usernameError").style.display = "block";
        setTimeout(() => {
            document.getElementById("usernameError").style.display = "none";
        }, 5000);
        localStorage.removeItem("name");
    }
}

function indexCSS() {
    return `
        <style>
        @import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;800;900&display=swap);
    
        body {
            background-color: #090c10;
            color:#d0d6db;
            font-family: 'Lato', sans-serif;
        }
    
        input {
            background-color:transparent;
            border:2px solid #11151b;
            outline:none;
            width: 150px;
            height: 30px;
            border-radius: 5px;
            padding:10px;
            margin-bottom:20px;
            color:#757575;
        }
    
        input::placeholder {
            color:#3e495a;
        }
            #signup-container {
                position:fixed;
                inset: 0px;
                width: 25rem;
                height: 5rem;
                margin: auto;
                border-radius: 15px;
            }
            #signup-content {
                border: 3px solid #11151b;
                padding:10px;
                border-radius: 15px;
            }
            button {
                background-color: #23d18c;
                color:#d0d6db;
                text-shadow:0px 0px 10px black;
                padding:10px 153px;
                border-radius: 5px;
                border:none;
            }
            button:hover {
                text-shadow: none;
                cursor:pointer;
                background-color: #1a9e69;
            }
            </style>
        `;
}

function indexCSSwithPicsum() {
    return `
          <style>
          @import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;800;900&display=swap);
      
          body {
              background: url(https://picsum.photos/4000/?blur=2);
              background-size: cover;
              color:#d0d6db;
              font-family: 'Lato', sans-serif;
              text-align: center;
              margin-top:40vh;
              text-shadow:0px 0px 2px black;
          }
          input {
            width:300px;
            height:25px;
            border-radius:100px;
            outline:none;
            border:none;
            padding:10px;
          }
          button {
            background-color: #23d18c;
            color:#d0d6db;
            margin:10px;
            text-shadow:0px 0px 10px black;
            padding:10px 70px;
            border-radius: 5px;
            border:none;
        }
        button:hover {
            text-shadow: none;
            cursor:pointer;
            background-color: #1a9e69;
        }
              </style>
          `;
}

function randomNameGradient() {
    const randomGradient = Math.random() * 10;
    console.log(randomGradient);

    if (randomGradient > 5) {
        return `<style>
        #name-gradient {
            text-shadow:none;
            background: #E02A55;
            background: linear-gradient(to right, #E02A55 0%, #6F4CD2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;            
        }
        </style>`;
    } else {
        return `<style>
        #name-gradient {
            text-shadow:none;
            background: #D100FF;
            background: linear-gradient(to right, #D100FF 0%, #6F4CD2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;                     
        }
        </style>`;
    }
}

function search() {
    const query = document.getElementById('searchbar').value;
    window.open(`https://google.com/search?q=${query}`, '__blank')
}

function indexpage() {
    setTimeout(() => {
        const randomNumber = Math.random() * 10;
        if (randomNumber > 0) {
            document.getElementById('greeting').innerText = "Hello"
        }
        if (randomNumber > 1) {
            document.getElementById('greeting').innerText = "Hey"
        }
        if (randomNumber > 2) {
            document.getElementById('greeting').innerText = "Hiya"
        }
    }, 0);
    return `
    <style>
    background-color:black;
    </style>
        ${indexCSSwithPicsum()}
        ${randomNameGradient()}
        <h1><span id="greeting">Hello</span> <span id="name-gradient">${localStorage.getItem('name')}!</span></h1>
        <br><br><input placeholder="Search the web..." id="searchbar">
        <br><button onclick="search()">Search</button>
    `;
}

if (
    localStorage.getItem("name") == null ||
    localStorage.getItem("name") == ""
) {
    localStorage.clear();
    const x = webview(`
  ${indexCSS()}
  <style>
      #signup-container {
          position:fixed;
          inset: 0px;
          width: 25rem;
          height: 11rem;
          margin: auto;
          border-radius: 15px;
      }
      #signup-content {
          border: 3px solid #11151b;
          padding:10px;
          border-radius: 15px;
      }
      .usernameError-content {
        position: relative;
        bottom: 5px;
        margin-left:5px;
        color:#ff4c76;
      }
      #usernameError {
        background-color: #ff4c763d;
        padding:5px;
        border-radius: 5px;
        display:none;
      }
      #usernameError>img {
        transition: ease all 0.2s
      }
      #usernameError>img:hover {
        transform: scale(90%)
      }
      </style>
        <div id="signup-container">
            <div id="signup-content">
                <h1>Enter your name.</h1>
                <p id="usernameError"><img src="./src/assets/error-icon.png" alt="Error" width="20"><span class="usernameError-content">You must have a name longer then 2 characters.</span></p>
                <input type="text" placeholder="Your name.." id="usernameInput">
                <br><button onclick="registerAccount()">It's go time!</button>
            </div>
        </div>
    `);
    body.innerHTML = x;
} else {
    const x = webview(`
  ${indexpage()}
        `);
    body.innerHTML = x;
}
