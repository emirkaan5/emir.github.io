$(document).ready(function() {

    function showContainer() {
        $(".container").stop(true, true).slideDown();
    }
    
    // Show researchText and hide others
    $("#researchButton").click(function() {
        showContainer();
        $("#researchText").stop(true, true).slideDown();
        $("#education, #communityWork, #researchWork,#certs").stop(true, true).slideUp();
    });
    
    // Show education and hide others
    $("#eduButton").click(function() {
        showContainer();
        $("#education").stop(true, true).slideDown();
        $("#researchText, #communityWork, #researchWork,#certs").stop(true, true).slideUp();
    });
    
    // Show communityWork and hide others
    $("#community").click(function() {
        showContainer();
        $("#communityWork").stop(true, true).slideDown();
        $("#researchText, #education, #researchWork,#certs").stop(true, true).slideUp();
    });
    
    // Show researchWork and hide others
    $("#research").click(function() {
        showContainer();
        $("#researchWork").stop(true, true).slideDown();
        $("#researchText, #education, #communityWork,#certs").stop(true, true).slideUp();
    });

    $("#onlineWork").click(function() {
        showContainer();
        $("#certs").stop(true, true).slideDown();
        $("#researchText, #education, #communityWork,#researchWork").stop(true, true).slideUp();
    });
    $(document).on('click', function(event){
        // Check if the click is not on the container, buttons, or any of their children
        if (!$(event.target).closest('.container, .button-container button').length) {
            $('.container').stop(true, true).slideUp();
        }
    });
    
    });
    
