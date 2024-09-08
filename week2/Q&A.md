# Q&A Cohort49 Week 2

## Muatasim A.

I got confused by the different ways of handling fetch errors.
Is it ok if I fetch, parse the response body, and handle errors inside one async function using the try/catch blocks?

Answer: There is section in the Study Guide addressing error handling with `async/await`: <https://hackyourfuture.github.io/study/#/javascript/modern-js?id=catching-errors-in-asyncawait>

In general, catch the error in the calling function where you expect to 'consume' the data. No need to catch it earlier in the call chain.

## Mustafa Sarıtaş

What are the fundamental differences between Fetch API and traditional XMLHttpRequest?

What common errors might we encounter when using Fetch API and how can we resolve them?

## Fatemeh Alinejad

If a fetch request encounters a redirect to a different origin, how does CORS affect this?

Answer: If the new origin disables CORS then the request will fail. But the origin that (knowingly) issues the redirect should be designed not to cause such problems.

## Nima Saghikalhori

How can we handle non-JSON responses such as text, blobs, form data using Fetch?

Answer: See <https://developer.mozilla.org/en-US/docs/Web/API/Response#instance_methods>

## Alia Taher

What factors should I consider when deciding whether to use Promises with then chaining or async/await ?

## Oleksandr Vasyliev

Is it possible, and should I cancel await fetch after several seconds, if server is not responding for a long time.

Answer: See `fetch-abort` example.

## Tugbanur

Why do we need to convert the fetch response to JSON. Are there other methods ?

## Elias Daoud Rajha

Are there times when using async/await might not be the best choice compared to using Promise chains?

## Dorelys Rodríguez

How should we handle errors when using async/await with multiple asynchronous tasks? Are there best practices for managing multiple try/catch blocks?

Answer: Most of the time you should not use multiple try/catch blocks. Only catch errors in places where you have a clear strategy on how to deal with the error. Logging the error to the console does not count as such a strategy

## Beimnet

How CORS prevent us from csrf attacks?

Answer: When CORS is disabled it disallows API requests (e.g. using `fetch`) from a front-end that comes from a different origin than the one that hosts the API. But more measures may be needed for high-risk sited to guard against CRSF. A good intro can be found here: https://blog.vnaik.com/posts/web-attacks.html

## Sofiia

Fetch API or Axios library? Which is better to use? Are there any specific disadvantages of the Axios library? Or is the choice between these tools for working with APIs more a matter of personal developer style?

Answer: See `xml-axios-fetch` example.
