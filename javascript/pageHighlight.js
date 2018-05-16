function makeSelection()
            {
                var index = "index.php";
                var adventures = "adventures.php";
                var bikes = "bikes.php";
                var parts = "parts.php";
                var contact = "contact.php";
                
                var pageName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

                switch (pageName) {
                    case "index.php":
                        document.getElementById("homeSelect").className = "navItem selected";
                        break;
                    case adventures:
                        document.getElementById("adventuresSelect").className = "navItem selected";
                        break;
                    case bikes:
                        document.getElementById("bikesSelect").className = "navItem selected";
                        break;
                    case parts:
                        document.getElementById("partsSelect").className = "navItem selected";
                        break;
                    case contact:
                        document.getElementById("contactSelect").className = "navItem selected";
                        break;
                }
            }
            
            window.onload = makeSelection;