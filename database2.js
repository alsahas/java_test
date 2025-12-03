import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

	const firebaseConfig = 
	{
	    apiKey: "AIzaSyCyizOZNUcbczGjh1P0sxn85LoiLI9Q0yw",
	    authDomain: "sahashop-97ae5.firebaseapp.com",
	    databaseURL: "https://sahashop-97ae5-default-rtdb.firebaseio.com",
	    projectId: "sahashop-97ae5",
	    storageBucket: "sahashop-97ae5.firebasestorage.app",
	    messagingSenderId: "620364206298",
	    appId: "1:620364206298:web:bb9a99e5e60e4be3dad5e3"
	};
	const app = initializeApp(firebaseConfig);
	import {getDatabase, set, get,update,remove,ref,runTransaction,child,onValue}
	from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";
	const db=getDatabase();
	const dbref=ref(db);
	
async function updateRequestState(requestid,newState) 
{
	const targetPath = "requests/"+requestid;
	const updates = 
	{
		state: newState
	};

	try 
	{
		await update(ref(db, targetPath), updates);
		console.log("State successfully updated in Realtime Database.");
	} 
	catch (error) 
	{
		console.error("Error updating state: ", error);
	}
}

function getNow()
{
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1; // Add 1 because months are 0-indexed
	const day = today.getDate();
	const hour = today.getHours();
	const minute = today.getMinutes();
	const second = today.getSeconds();
	//console.log(year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second);
	return year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
}
function saveDriver(drivername,user,pass)
{
	localStorage.setItem('drivername',drivername);
	localStorage.setItem('username',user);
	localStorage.setItem('password',pass);
}
function loadRequests()
{
	localStorage.setItem('request',"");
	var empty=document.getElementById("empty-request");
	var request_section=document.getElementById("request_section");
	var found=false;
	const drivername = localStorage.getItem('drivername');
	if(drivername!=null&&drivername.length>0)
	{
		document.getElementById("drivername").innerHTML=drivername;
		document.getElementById("driver-login").style.display="none";
		document.getElementById("driver-logout").style.display="block";
		var inner="";
		get(child(dbref,"requests")).then((snapshot) => 
		{
			if (snapshot.exists()) 
			{
				const data = snapshot.val();
				const keys = Object.keys(data);
				let i = 0;
				while (i < keys.length) 
				{
					const key = keys[i];
					const item = data[key];
					if(item.driver==drivername)
					{
						inner+="<li><a href=\"\"id=\""+key+"\"class=\"categoryli\">طلبية رقم:"+key+"&nbsp;بإسم:"+item.fullname+"</a></li>";		
						found=true;
					}
					i++;
				}
				if(found)
				{
					request_section.innerHTML="<ul id='category'class='category'>"+inner+"</ul>";
					//topnav.add(request_section);
				}
				else
				{
					request_section.innerHTML="<span id='empty-request'class='empty-request'>No Requests For Now</span>";
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
function loadCart(serie)
{
	var dict = [];
	get(child(dbref,"products")).then((snapshot) => 
	{
		if (snapshot.exists()) 
		{
			const data = snapshot.val();
			const keys = Object.keys(data);
			let i = 0;
			let j = 0;
			let row;
			while (i < keys.length) 
			{
				const key = keys[i];
				const item = data[key];
				for(j=0;j<serie.length;j++)
				{
					if(serie[j][0]==key)
					{
						row={id:key,name:item.name,quantity:serie[j][1],price:item.price,pngExist:item.pngExist};
						dict.push(row);
						drivercart = dict.slice();
					}
				}
				i++;
			}
			distributeMyRequest();
		}
	});
}
function distribute(requestid)
{
	//document.getElementById("mycart").src ="png/cart3.png";
	var page=document.getElementById("page");
	if(page!=null)
	{
		get(child(dbref,"requests")).then((snapshot) => 
		{
			if (snapshot.exists()) 
			{
				const data = snapshot.val();
				const keys = Object.keys(data);
				let series="";
				let i = 0;

				while (i < keys.length) 
				{
					const key = keys[i];
					const item = data[key];
					if(requestid==key)
					{
						series=""+item.cart;
						localStorage.setItem('address',item.address);
						localStorage.setItem('state',item.state);
					}
					
					i++;
				}
				let data2=[];
				if(series!=null&&series.length>0)
				{
					let prod= series.split(";");
					for(i=0;i<prod.length-1;i++)
					{
						data2[i]=prod[i].split(":");
					}
					loadCart(data2);
				}
			} 
			else 
			{
				console.log("No data available");
			}
		}).catch((error) => 
		{
			console.error(error);
		});
	}
}
function distributeMyRequest()
{
	if(drivercart!=null)
	{
		var deliver1="";
		var deliver2="";
		var deliver3="";
		if(localStorage.getItem('state')=="1")
		{
			deliver1="deliver12";
			deliver2="deliver2";
			deliver3="deliver3";
		}
		else if(localStorage.getItem('state')=="0")
		{
			deliver1="deliver1";
			deliver2="deliver22";
			deliver3="deliver3";
		}
		else if(localStorage.getItem('state')=="2")
		{
			deliver1="deliver1";
			deliver2="deliver2";
			deliver3="deliver32";
		}
		var inner="";
		var inners="<button id='total_bill'class='total_bill'><b>مجموع الفاتورة "+numberComma(updateTotal2())+" ل.ل</b></button><button id='deliver1'class='"+deliver1+"'><b>تمّ التسليم</b></button><button id='deliver2'class='"+deliver2+"'><b>لم يتمّ التسليم</b></button><button id='deliver3'class='"+deliver3+"'><b>ملغاة</b></button><button id='address_bill'class='address_bill'><b>"+localStorage.getItem('address')+"</b></button>";
		var im="0";
		var price="";
		var quantity=0;
		var display="none";
		var page=document.getElementById("page");
		if(page!=null&&drivercart!=null)
		{
			for (let i = 0; i < drivercart.length; i++) 
			{
				const item= drivercart[i];
				
				if(item.pngExist>0)im=""+item.id;
				else im="0";
				if(item.price>=1000)price=numberComma(item.price)+" L.L.";
				else price=item.price+" $";
				inner="<article class=\"product-card\"><img class=\"prod-image\"src=\"png/products/"+im+".png\"><p id=\"quantity"+item.name+"\"class=\"quantity\">"+item.quantity+"</p><p id=\"product"+item.name+"\"class=\"productname\">"+item.name+"</p><p id=\"price"+item.name+"\"class=\"productprice\">"+price+"</p></article>";
				inners+=inner;
			}
			page.innerHTML=inners;
		}
	}
}
function loginDriver()
{
	var username=document.getElementById("username");
	var password=document.getElementById("password");
	var success=false;
	if(username.value.length>0&&password.value.length>0)
	{
		get(child(dbref,"drivers")).then((snapshot) => 
		{
			if (snapshot.exists()) 
			{
				const data = snapshot.val();
				const keys = Object.keys(data);
				let i = 0;
				while (i < keys.length) 
				{
					const key = keys[i];
					const item = data[key];
					//console.log(username.value+":"+item.username);
					if(username.value==item.username&&password.value==item.password)
					{
						hideForm();
						success=true;
						localStorage.setItem('drivername',item.drivername);
						document.getElementById("drivername").innerHTML=item.drivername;
						loadRequests();
						document.getElementById("page").innerHTML="";
					}
					i++;
				}
				if(!success)
				{
					var message=document.getElementById("message-label2");
					message.style.display="block";
					window.setTimeout(function() 
					{
						if (message) 
						{
							message.classList.add('hidden');
						}
					}, 3000);
					message.style.display="block";
					message.classList.remove('hidden');
				}
			}
		});
	}
}
function setActiveCategory(clickedElement) 
{
    // We get the parent UL dynamically if the function is called this way
    const categoryList = document.getElementById('category');
    const currentlyActive = categoryList.querySelector('.active');

    if (currentlyActive) 
	{
        currentlyActive.classList.remove('active');
    }
    
    // Add the active class to the element that was actually clicked
    clickedElement.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => 
{
	const page= document.getElementById('page');
	const myform= document.getElementById('myForm');
	const categoryUL = document.getElementById('request_section');
	const login_btn = document.getElementById('driver-login');
	const logout_btn = document.getElementById('driver-logout');
	const login_form = document.getElementById('login_form');
	myform.addEventListener("keyup", function(event) 
	{
        if (event.key === "Enter") 
		{
			loginDriver();
        }
    });
	login_form.addEventListener('click', (event) => 
	{
		loginDriver();
	});
	if(categoryUL!=null)
	{
		categoryUL.addEventListener('click', (event) => 
		{
			// Check if the clicked element (event.target) or one of its parents is a `.block`
			const clickedCategory = event.target.closest('a');

			if (clickedCategory) 
			{
				event.preventDefault(); 
				const requestid = clickedCategory.getAttribute('id');
				localStorage.setItem('request',requestid);
				distribute(requestid);
			}
		});
	}
	if(page!=null)
	{
		page.addEventListener('click', (event) => 
		{
			// Check if the clicked element (event.target) or one of its parents is a `.block`
			const clickedButton = event.target.closest('button');

			if (clickedButton) 
			{
				event.preventDefault(); 
				const button = clickedButton.getAttribute('id');
				if(button=="deliver1")
				{
					var deliver1=document.getElementById("deliver1").className;
					if(deliver1!="deliver12")
					{
						document.getElementById("deliver1").className = "deliver12";
						document.getElementById("deliver2").className = "deliver2";
						document.getElementById("deliver3").className = "deliver3";
						updateRequestState(localStorage.getItem('request'),"1");
					}
				}	
				else if(button=="deliver2")
				{
					var deliver2=document.getElementById("deliver2").className;
					if(deliver2!="deliver22")
					{
						document.getElementById("deliver1").className = "deliver1";
						document.getElementById("deliver2").className = "deliver22";
						document.getElementById("deliver3").className = "deliver3";
						updateRequestState(localStorage.getItem('request'),"0");
					}
				}	
				else if(button=="deliver3")
				{
					var deliver3=document.getElementById("deliver3").className;
					if(deliver3!="deliver32")
					{
						document.getElementById("deliver1").className = "deliver1";
						document.getElementById("deliver2").className = "deliver2";
						document.getElementById("deliver3").className = "deliver32";
						updateRequestState(localStorage.getItem('request'),"2");
					}
				}	
			}
		});
	}
	if(login_btn!=null)
	{
		login_btn.addEventListener('click', (event) => 
		{
			event.preventDefault(); 
			showForm2();
			login_btn.style.display="none";
		});
	}
	if(logout_btn!=null)
	{
		logout_btn.addEventListener('click', (event) => 
		{
			event.preventDefault(); 
			login_btn.style.display="block";
			logout_btn.style.display="none";
			localStorage.setItem('drivername',"");
			document.getElementById("drivername").innerHTML="";
			document.getElementById("request_section").innerHTML="";
			document.getElementById("page").innerHTML="";
		});
	}
});
document.addEventListener('DOMContentLoaded', (event) => 
{
    // Select the existing parent container (the <ul>)
    const categoryUL = document.getElementById('request_section');

    // Add a single click listener to the parent UL
    categoryUL.addEventListener('click', function(e) 
	{
        // e.target is the specific element that was clicked (could be the <a> or the <li> itself)
        
        // We need to find the nearest <li> parent of the element that was clicked
        // This handles cases where the user clicks directly on the link text (<a> tag)
        const clickedLI = e.target.closest('a');

        // Check if a valid LI was found and it is actually inside our UL
        if (clickedLI && categoryUL.contains(clickedLI)) 
		{
            // Prevent the default link behavior
            e.preventDefault(); 
            
            // Call our function using the found LI element
            setActiveCategory(clickedLI);
        }
    });
});
document.addEventListener('DOMContentLoaded',loadRequests);
