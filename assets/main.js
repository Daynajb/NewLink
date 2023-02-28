window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.
    
    }
/*function openPopup() {
  var src = "block.source.url";
  var iframe = document.getElementById("popup-iframe");
  iframe.src = block.source.url;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("popup-iframe").src = "";
}*/

/*

 
  window.toggle = function() { 
    // the Div 
    var myDiv = document.getElementById('showhide');

    // toggle visibility, depending on current state
    if (myDiv.style.display == 'none') { 
      // Div is visible. hide it
      myDiv.style.display = 'block';
    } else { 
      // Div is hidden. show it 
      myDiv.style.display = 'none';
    }
           }  </script>

      
*/


/**/
/*<!--TICKER TAPE PURE CSS TUTORIAL BY NICK SANTINI ON CODEPEN-->*/


var newsItem = [
  {
   
    "story": "My desire to travel and explore the world has given me food for thought, which fuels my creativity."
  },
  {
   
    "story": "My design work has always been influenced by the expanse around me and the ability to curate multiple ideas into a distinct theme."
  },
  {

    "story": "It has always piqued my interest to learn about different cultures and meet new people from all over the world."
  },
  {

    "story": "Trying new things, sailing unknown seas, and maintaining a persistent spirit of endeavour and learning made me a more empathetic person for tomorrow."
  },
  {

    "story": "Through my adventures, I realized that even the smallest change can affect the entire world. "
  },
    {

    "story": "While assembling the collection, I realized that it forms a certain pattern that connects different themes together; upon further reflection, the collection creates an experience that reflects my personal travel journey. "
  }
];

for (i = 0; i < newsItem.length; i++) {
  $("#newsTicker p").append(
   
    "<span class='story'>" + newsItem[i].story + "</span>"
  );
    
}
