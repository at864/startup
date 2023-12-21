# midterm notes
<image src="notes.png"/>


### If having issues with MongoDB parsing, make sure node version is > v14 with 
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

### deploy to production
./deployService.sh -k <yourpemkey> -h <yourdomain> -s simon


# final notes

### port numbers
HTTP: 80
HTTPS: 443
SSH: 22

### http codes
300: redirection
400: client error
500: server error

http header 'content-type' tells browser what type of content is sent, like text, image, or html page

### cookie attributes
Domain: specifies which server can receive a cookie
Path: indicates a URL path that must exist in the requested URL in order to send the Cookie header
SameSite: lets servers specify whether/when cookies are sent with cross-site requests
HTTPOnly: prevents client-side scripts from accessing data; only sent to the server

### GET request example
GET /home/user/example.txt HTTP/1.1

GET /docs/tutorials/linux/shellscripts/howto.html HTTP/1.1
Host: Linode.com
User-Agent: Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.8) Gecko/20091102 Firefox/3.5.5
Accept: text/html,application/xhtml+xml,
Accept-Language: en-us
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8
Cache-Control: no-cache

### POST request example
POST /home/user/datafile HTTP/1.1
From: user@linode33
User-Agent: Mytools/0.8.0
Content-Type: application/json
Content-Length: 32

{
    [Json-formatted data pairs]
}

### MongoDB query selectors
$eq : Matches values that are equal to a specified value.
$gt : Matches values that are greater than a specified value.
$gte : Matches values that are greater than or equal to a specified value.
$in : Matches any of the values specified in an array.
$lt : Matches values that are less than a specified value.
$lte : Matches values that are less than or equal to a specified value.
$ne : Matches all values that are not equal to a specified value.
$nin : Matches none of the values specified in an array.


The WebSocket protocol enables ongoing, full-duplex, bidirectional communication between a web client and a web server over an underlying TCP connection. The protocol is designed to allow clients and servers to communicate in realtime, allowing for efficient and responsive data transfer in web applications.

### React
JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript.

With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy.

The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.

### npm
NPM are some excellent web development tools that help build good UIs, manage states, handle data, test code, and build APIs. They can also improve productivity, ensure quality, and promote collaboration. 

The package. json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

In JavaScript, the fetch() method is used to make asynchronous requests to the server and load the information that is returned by the server onto the web pages.

As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

 Vite is a frontend tool that is used for building fast and optimized web applications similar to React.

