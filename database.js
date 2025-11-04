  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCyizOZNUcbczGjh1P0sxn85LoiLI9Q0yw",
    authDomain: "sahashop-97ae5.firebaseapp.com",
    projectId: "sahashop-97ae5",
    storageBucket: "sahashop-97ae5.firebasestorage.app",
    messagingSenderId: "620364206298",
    appId: "1:620364206298:web:bb9a99e5e60e4be3dad5e3"
  };

  // Initialize Firebase
	const app = initializeApp(firebaseConfig);
	import {getDatabase, set, get,update,remove,ref,child,onValue}
	from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";
	const db=getDatabase();
	const dbref=ref(db);

function loadCategories()
{
	var topnav=document.getElementById("category");
	if(topnav!=null)
	{
		topnav.innerHTML="";
		get(child(dbref,"categories")).then((snapshot) => 
		{
console.log("pkk");
			if (snapshot.exists()) 
			{
				const data = snapshot.val();
				const keys = Object.keys(data);
				let i = 0;
				while (i < keys.length) 
				{
					const key = keys[i];
					const item = data[key];
					var a= document.createElement("a");
					var li= document.createElement("li");
					a.id=""+key;
					a.setAttribute('category-name',""+item.category);
					a.href="#";
					a.style="margin:5px;"
					if(i==0)a.classList.add('active');
					a.innerHTML=item.category;
					li.append(a);
					topnav.append(li);
					i++;
				}
			} else {
				console.log("No data available");
			}
		}).catch((error) => 
		{
			console.error(error);
		});
	}
}
document.addEventListener('DOMContentLoaded',loadCategories);
