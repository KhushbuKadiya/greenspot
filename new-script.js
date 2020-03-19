    /********** Change all the commented script with new script in all the file ************/
    // tjq(".filters-container .filters-option a").not( ".filter-single-select a" ).click(function(e) {
    //     e.preventDefault();
    //     if (tjq(this).parent().hasClass("active")) {
    //         tjq(this).parent().removeClass("active");
    //     } else {
    //         tjq(this).parent().addClass("active");
    //     }
    // });

    /*** Use or replace below script ***/
    tjq(".filters-container .filters-option li").not( ".filter-single-select li" ).click(function(e) {
        e.preventDefault();
        if (tjq(this).hasClass("active")) {
            tjq(this).removeClass("active");
        } else {
            tjq(this).addClass("active");
        }
    });

    /**** Left Side Filter Single Select ***/
    // tjq(".filters-container .filters-option.filter-single-select a").click(function(e) {
    //     e.preventDefault();
    //     tjq(".filters-option li").removeClass("active");
    //     tjq(this).parent().addClass("active");
    // });

    tjq(".filters-container .filters-option.filter-single-select li").click(function(e) {
        e.preventDefault();
        tjq(".filters-option li").removeClass("active");
        tjq(this).addClass("active");
    });

    /**** Dropdown Single Select ***/
    // tjq(".select-dropdown-filter-container .dropdown-single-select a").click(function(e) {
    //     e.preventDefault();
    //     tjq(".filters-option li").removeClass("active");
    //     tjq(this).parent().addClass("active");
    // });

    tjq(".select-dropdown-filter-container .dropdown-single-select li").click(function(e) {
        e.preventDefault();
        tjq(".filters-option li").removeClass("active");
        tjq(this).addClass("active");
    });
    
    /**** Dropdown Multiple Select ***/
    // tjq(".select-dropdown-filter-container .dropdown-multi-select a").click(function(e) {
    //     e.preventDefault();
    //     if (tjq(this).parent().hasClass("active")) {
    //         tjq(this).parent().removeClass("active");
    //     } else {
    //         tjq(this).parent().addClass("active");
    //     }
    // });

    tjq(".select-dropdown-filter-container .dropdown-multi-select li").click(function(e) {
        e.preventDefault();
        if (tjq(this).hasClass("active")) {
            tjq(this).removeClass("active");
        } else {
            tjq(this).addClass("active");
        }
    });