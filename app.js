console.log("this is my tutorial 42");
var button=document.getElementById('button');
var content=document.getElementById('unli');
var content2=document.getElementById('unli2');
var url="posts.json";
var post=[];
var changetitle=["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10","image11","image12","image13","image14","image15","image16","image17","image18","image19","image20","image21"];
function getdata()
{
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        post=data.posts;
        for(var i=0; i<post.length; i++)
      {
         console.log(post[i].title)
         var list=document.createElement('li');
        list.innerHTML=post[i].title;
        content.append(list);

    }
    })
    
}
function changedata()
{
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        post=data.posts;
        for(var i=0; i<post.length; i++)
      {
         console.log(post[i].title)
         var list=document.createElement('li');
         post[i].title=changetitle[i];
         list.innerHTML=post[i].title;
        content2.append(list);

    }
    })
    
}



