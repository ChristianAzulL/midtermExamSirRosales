$(function(){
 var search = $('#search');
 var items = $('#item-list');
 var dataitems;
 var result = $('#result')
     $.ajax({
          method: 'GET',
         url: 'https://newsapi.org/v2/top-headlines?apiKey=1570340d2b0d49489fe76ee230bf6f34&country=' + "ph", 
        }).then(function(res){
            console.log(res.totalResults)
            result.text(`You have ${res.totalResults} Results`)
            var fetch = res.articles
            fetch.forEach(function(element) {
               var resimage;
               var  dataimage
               console.log(element)
               dataitems = `<li> <img  src="${element.urlToImage}" alt="" style="height:200px"><h5>${element.title}</h5>
               <h7>${element.author}</h7>
                <h6>${element.content}</h6>
                <a class="btn btn-dark" href="${element.url}">Go to page</a>
                <h6  style="background-color:whitesmoke;height:30px;font-style:bold">Published ${element.publishedAt}</h6>
               </li>`
                            items.append(dataitems);
            });

        })
       


})