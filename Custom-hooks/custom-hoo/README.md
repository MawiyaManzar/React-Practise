### UseDebounced Method 
We’ll implement a useDebounced method, which is useful when typing queries in a search bar (like on Amazon). The goal is to avoid sending a request to the database on every keystroke.

For example:

When you type "iphone" and then stop typing for, say, 300 milliseconds, the query "iphone" is sent to the database, which fetches all matching products.

If you continue typing and add " 12 pro", the query becomes "iphone 12 pro" and is sent again (after the debounce delay). This way, you get relevant results without overloading the system.

Now, why don’t we just send every character directly to the database?

Too many API calls – If every keystroke triggered a request, the server could get flooded with requests and potentially crash.

Inefficient queries – A single character (like "i") usually isn’t meaningful and would return useless or too many results. Waiting until the user pauses typing is much more efficient.

That’s why debouncing is important: it ensures the API is only called after the user has stopped typing for a short period, reducing load and improving performance.