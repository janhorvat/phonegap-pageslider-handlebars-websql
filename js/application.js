var slider = new PageSlider($("#content_wrapper"));
$(window).on('hashchange', initialize);

window.homePage = $("#home").html();
window.booksPage = $("#books").html();

function initialize() {
    var page, hash = window.location.hash;

	if (hash === "#books") {
		books();
    } else if (hash === "#storage") {
		storage();
    } else {
		home();
    }
    		
    setActiveClass(hash);
}

function setActiveClass(hash) {
	$(".footer_item a").removeClass('active');

	if (hash === "#books") {
		$("#footer_btn_books").addClass('active');
	} else if (hash === "#storage") {
		$("#footer_btn_storage").addClass('active');
	} else {	
		$("#footer_btn_home").addClass('active');  
	}
}

function home() {
	page = window.homePage;

	var home_data = { 
		title : "About this sample",
		phonegap: "Easily create apps using the web technologies you know and love: HTML, CSS, and JavaScript. PhoneGap is a free and open source framework that allows you to create mobile apps using standardized web APIs for the platforms you care about.",
		pageslider : "In a real-life application, you will typically want to generalize the process a little bit. For example, you could: Automatically add new pages to the DOM and remove them from the DOM after they are animated out of the viewport. Automatically determine the sliding direction based on the page history. Provide a hook (using the webkitTransitionEnd event) for adding some logic when the transition completes.",
		handlebars : "Handlebars provides the power necessary to let you build semantic templates effectively with no frustration. Mustache templates are compatible with Handlebars, so you can take a Mustache template, import it into Handlebars, and start taking advantage of the extra Handlebars features.",
		websql : "Web SQL Databases is a spec that brings SQL to the client side. If you have a back-end developer’s background, then you’ll probably be familiar with SQL and happy as a pig in muck. If not, you might want to learn some SQL before you start hacking around.",
		author : "Jan Horvat"
	};
	
	var template = Handlebars.compile(page);
	$("#home").html(template(home_data));	
	page = $("#home").html();	
	slider.slidePage($(page));	
}

function books() {
	page = window.booksPage;
	
	var books_data = { 
		books: [
			{
				title : "Hobbit", 
				description: "The Hobbit, or There and Back Again, better known by its abbreviated title The Hobbit, is a fantasy novel and children's book by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children's literature.",
				image : "/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gNzUK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAUAA0AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A861DB1Cf/rq4/U1WIUtz24Fa+n2Eepa7qED+YSqzyqE6kqCcfjirNh4Wa+s4mPnwXD3TRHeMKsaxmRnxjJ4U96wnXhB2kxqDaujIt4reWyuppVlLW4UkK4AOWx6Vqw6DA100RmcL/o4AEikjzNucjH+1xTNLsbfULW9S1lniMex5omKt5se8KSDjgqSDjn9K2/7H2a3HbR310ry6n9h+YrukRPuSrx0BA4x6YNc1Wq1Jq9v6X/BLitNji71EtrpoYzuVevzBh+YAqAsNhAPXkV08Ph6O/ntWuZZkkmtrmVoGADx+WGYE8DhsHt69apw6Xp7aJeX5S4JtfKUoJl+YuSCfu8dPet4V42tv/wAPb8yHB3MIyMMYaimyqhmfydwj3Hbu647ZoroJOl0+9i07XdRd0kdpUngAQcjeCufwzmr2harJBBFHbWzT3ENz5rK5+WRDGUZPbIJ5qwulwwXssspEh85mHYde9XLPw1aXFvcXkbFVjDfKTnkDP+frXnVatGTakd0cJV5Uylp1o2mC6W1t7gPc7UImQblQMH2jB5JwOeOh4q+by5h1J76LTZR5l+LwBhkKRk4H/fXJ9q6XRfDkM9skrTKFf+LOWc5x36elaU3hY28hK7FXoEYbt31zXFUrptyaudkaFGHu31OFto7nSLeOGW1uHji88RgJ85MqbSPYD0+tc5aTeRo+o2joxe8ZCGAG1dhJ/rXba2ttHdBLcmTYhU4OQh7hfT6ViyWzFUZoSFAwPlreFePbf9Hf8zN4FtXTODdGVyCveiujuLB2mJjibb9cfpRXoKumjhlh5J2O7/sm2uLq7tQ/lPFJ1653c9Kv6Hp0+l6itpewiW0uSUV1PG7HQ9xkZ/Sl0W4sZ9W1A4ka5jKCXAOS2MAdPY12Vti4tBKYihHO1+MY7/WvEknzuLPS9s/Z6bHPSeHbjTJGfS9Ta3Q8iKQb1HNSma+uXSz1eOJoJWCCe2YqCf7p9AcUl54p0ZC3lTPOyjLbFYnP90cdf5VVtbrUdaurZHsvsljHIJG3H52wSQME9MYpPnW+wJuSvL7y/qDadphEQst+0cpDADt/HFc7dX2j3O755IWBztkBWuw1RlRQ32u3tF67pFBz9MkVzjuJjOxIuo0A2yiHaWPcD1+tZVFZ3NKLVrnKGFLq5uGhgMkaybQw+gP8zRWDcWemiQEXCSM43Oxkxlj1xg9KK9RUI2WpzPFVL7HoPhwxxajqt/kBLi4yCOm1RjP55rpbrSbbW4orh9SmW3KFdkc37twfXsa81i1l7XR74biZmmMcO0gH5mxjkds5/KvQ7XyZTCs5YqqgKQdqn04FcteMqUnPdPRfImm1LRbo0LTw9Y2symGFf3Y+Xnj8hV+SNkRhFEqk87lUE596pPdQrciOG8jj2R73jyOFH8X09680s/EGpX2q3ljb3r3QublZbeaSVkSPYxbOPQ8DbRCCafQG5N6u53txDuu5izwq7AFmIO+MY7e35dayNa1NLOOIp54QvtG9SNxKnAywz1x0rTu41Z2l+7I64Y7uPyrz3xfeXEd8iSTym1RFKpH8u1vc965qEfa1OVm8nywucDPkvgZIA7UVYknt1ckqW3c8nJor6H2nkeU4eZLJfytfTiGaMNHMxCSdyCeld7pHiiA6dFLfXMVs7ZO2U59uOenWvL7q7tl1G6UR7SJn+YMfU1ffXtNKTwvaiQyJGgl2DKlUwSPcnms6kOZWauioys731PYVbTNYjja5MVxCVOySJiCw/u5B6c8iqtloVnaas97tSP5i5jUcAHngVxGl+IreOxtvKtiqwxhNoKgHA+ZuO5NasnjCNXkOwqGU9cZH3sHj6jj2rk+r20V7HQq3U7C91a1jLEDHONrda8q8Qa02o3UkrIYhnGC4PA6VdvPF9nJ5mbciR0VQTg7SM5I+uf8APSuT1vUoLmVJIIFgBzvAAwxz1x24xx65xxxWlGiovSNiJ1G1qypJdRbzncaKznkUtmiu1I5mz//Z"
			},
			{
				title : "The Hitchhiker's Guide to the Galaxy", 
				description : "The various versions follow the same basic plot but they are in many places mutually contradictory, as Adams rewrote the story substantially for each new adaptation. Throughout all versions, the series follows the adventures of Arthur Dent, a hapless Englishman, although the story also follows the adventure of other major characters: Ford Prefect, who named himself after the Ford Prefect car to blend in with what was assumed to be the dominant life form, automobiles, is an alien from a small planet somewhere in the vicinity of Betelgeuse and a researcher for the eponymous guidebook; Zaphod Beeblebrox, Ford's semi-cousin and the Galactic President; the depressed robot Marvin the Paranoid Android; and Trillian, formerly known as Tricia McMillan, a woman Arthur once met at a party in Islington and the only other human survivor of Earth's destruction.",
				image : "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"
			},
			{
				title : "Game of Thrones", 
				description : "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of high fantasy novels by American author George R. R. Martin. It was first published on 6 August 1996. The novel won the 1997 Locus Award, and was nominated for both the 1997 Nebula Award and the 1997 World Fantasy Award. The novella Blood of the Dragon, comprising the Daenerys Targaryen chapters from the novel, won the 1997 Hugo Award for Best Novella. In January 2011 the novel became a New York Times bestseller and reached #1 on the list in July 2011.",				
				image : "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"
			}
		]
	};

	var template = Handlebars.compile(page);
	$("#books").html(template(books_data));
	page = $("#books").html();	
	slider.slidePage($(page));	
}

function storage() {
	
	var readDb = {
		callback : null, 
		queryYourName : function(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS DEMOTABLE (key, value)');
			tx.executeSql('SELECT * FROM DEMOTABLE WHERE key = "yourname"', [], readDb.querySuccess);
		},
		querySuccess : function(tx, results) {
			if (results.rows['length'] > 0) {
				var res = results.rows.item(0).value;
				readDb.callback(res);
			} else {
				readDb.callback(res);
			}
		},
		getYourName : function (callback) {
			readDb.callback = callback;
			var db = window.openDatabase("DEMODB", "1.0", "DEMODB", 200000);
			db.transaction(readDb.queryYourName);
		},
	}

	var data = readDb.getYourName(function(yourNameMemorized){
		if (jQuery.isEmptyObject(yourNameMemorized)) {
			$('div.result').html("");		
		} else {
			$('div.result').html("Your name: "+yourNameMemorized);
			$('#delete_button').css({'display': 'block'});			
		}
	});

	page = $("#storage").html();	
	slider.slidePage($(page));	
}

function memorize(yourname) {
	if (yourname) {

		function populateDB(tx) {
			tx.executeSql('DROP TABLE IF EXISTS DEMODB');
			tx.executeSql('CREATE TABLE IF NOT EXISTS DEMOTABLE (key, value)');
			tx.executeSql("DELETE FROM DEMOTABLE WHERE key = 'yourname'");
			tx.executeSql("INSERT INTO DEMOTABLE (key, value) VALUES ('yourname', '"+yourname+"')");
		}

		var db = window.openDatabase("DEMODB", "1.0", "DEMODB", 200000);
		db.transaction(populateDB);
		$('div.result').hide().html("Your name ("+yourname+") has been stored. If you refresh application, your name will be recovered from WebSQL and displayed here.").fadeIn();
		$('#delete_button').fadeIn();		
	}
}

function deleteFromDb() {
	function populateDB(tx) {
		tx.executeSql("DELETE FROM DEMOTABLE WHERE key = 'yourname'");
	}

	var db = window.openDatabase("DEMODB", "1.0", "DEMODB", 200000);
	db.transaction(populateDB);
	
	$('#delete_button').fadeOut();
	$('div.result').hide().html("Deleted from storage.").fadeIn();

    setTimeout( function(){	
		$('div.result').fadeOut();
	}, 2000);
	
}
