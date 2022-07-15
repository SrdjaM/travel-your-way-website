const firebaseConfig = {
  apiKey: "AIzaSyClVoVxfknsPbgRfA5_XiEXmD_1ABcb1pc",
  authDomain: "emakina-contactform.firebaseapp.com",
  databaseURL: "https://emakina-contactform-default-rtdb.firebaseio.com",
  projectId: "emakina-contactform",
  storageBucket: "emakina-contactform.appspot.com",
  messagingSenderId: "550498840659",
  appId: "1:550498840659:web:2a884516145a4f0f4316a6",
};

//initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference database

let contactFormDB = firebase.database().ref("Emakina-contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const fullName = getElementVal("full_name");
  const email = getElementVal("email");
  const message = getElementVal("message");

  console.log(fullName, email, message);
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
