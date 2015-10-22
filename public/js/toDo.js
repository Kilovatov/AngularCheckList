var MODULE = (function(my) {
	my.init =function(container){
		container.innerHTML="<article>"+
		 "<form class='form-inline'>"+
                "<to-do-form ng-repeat='item in formItems' form='item'></to-do-form>"+
                "<button class='btn btn-default' ng-click='addTask()'>create</button>"+
            "</form>"+
            "<nav class='nav nav-tabs'>"+
                "<li ng-repeat='filter in filters' class='{{filter.active}}'><a href='#'' ng-click='setFilter($index)'>{{filter.name}}</a></li>"+
            "</nav>"+
            "<section>"+
                "<div ng-repeat='task in tasks' class='task-container'>"+
                    "<task-line content='task' on-del='delTask($index)' on-edit='edtTask($index)' on-save='saveTask($index)' ng-show='show($index)'></task-line>"+
                "</div>"+
            "</section>"+
        "</article>";  
	};
	my.storage = '_Storage';

	my.config = localStorage.getItem(my.storage)? 
        JSON.parse(localStorage.getItem(my.storage))
    : {};

    window.addEventListener("click", function (event) {
	  localStorage.setItem(my.storage, JSON.stringify(my.config));
	  console.log(JSON.parse(localStorage.getItem(my.storage)));
	});

	

	return my;


}({}));



MODULE.init(document.getElementsByClassName('container')[0]);