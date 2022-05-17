console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

console.log("Finish");

function loginUser(email, password, callback, errorCallBackFunction) {
  setTimeout(() => {
    if (usersDB[email] != undefined) {
      console.log(`Now we have the data of user: ${email}`);
      let user = { userEmail: email };
      callback(user);
    } else {
      errorCallBackFunction("User not found!");
      let errorMsg = "User not found!";
      console.log(errorMsg);
    }
  }, 3000);
}

function getUserVideos(email, callback, noVideo) {
  setTimeout(() => {
    if (usersDB[email.userEmail].length != 0) {
      callback(email.userEmail);
    } else {
      noVideo(String);
      let errorVideo = "Videos not found!";
      console.log(errorVideo);
    }
  }, 2000);
}

function vodeoDetails(video, callback, noTitle) {
  setTimeout(() => {
    if (usersDB[video][0].title != undefined) {
      callback(usersDB[video]);
    } else {
      noTitle(String);
      let noTitleMsg = "Video Title not found!";
      console.log(noTitleMsg);
    }
  }, 2000);
}

const getPassedUsersFirstVideoTitle = (user) => {
  loginUser(
    user,
    "1234",
    (email) => {
      console.log("user:", email);
      getUserVideos(
        email,
        (video) => {
          console.log(`videos:`, usersDB[video]);
          videoDetails(
            video,
            (user) => {
              console.log(`title: ${user[0].title}`);
            },
            displayError
          );
        },
        displayError
      );
    },
    displayError
  );
};

getPassedUsersFirstVideoTitle("user2@hw.js");

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}
