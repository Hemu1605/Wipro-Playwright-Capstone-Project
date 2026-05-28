# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/checkout.spec.js >> TC_CHK_13 Verify Checkout Total Visibility
- Location: tests/checkout/checkout.spec.js:311:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Timeout: 10000ms
- Expected substring  -   1
+ Received string     + 371

- Total
+
+     
+
+
+
+
+
+
+
+      
+
+
+
+
+
+     
+     
+         
+         
+
+
+     
+     
+         
+             
+         
+     
+     
+         
+     
+         
+             Register
+             Log in
+                             
+                 
+                     Shopping cart
+                     (0)
+                 
+             
+                     
+                 
+                     Wishlist
+                     (0)
+                 
+             
+         
+     
+         
+
+
+         
+     
+         
+ You have no items in your shopping cart.        
+     
+
+
+     
+     
+         
+     
+     Search
+     
+         
+             
+         
+
+     
+     
+         
+             
+         
+         
+             
+         
+         
+             
+         
+         
+     
+
+
+         
+             
+
+
+     
+     
+         Books
+         
+                 
+
+     
+     
+         Computers
+         
+                 
+                 
+     
+         Desktops
+         
+
+     
+     
+         Notebooks
+         
+
+     
+     
+         Accessories
+         
+
+     
+                 
+
+     
+     
+         Electronics
+         
+                 
+                 
+     
+         Camera, photo
+         
+
+     
+     
+         Cell phones
+         
+
+     
+                 
+
+     
+     
+         Apparel & Shoes
+         
+                 
+
+     
+     
+         Digital downloads
+         
+                 
+
+     
+     
+         Jewelry
+         
+                 
+
+     
+     
+         Gift Cards
+         
+                 
+
+     
+     
+
+
+
+
+     
+         
+             
+
+             Categories
+         
+     
+     
+         
+     
+         Books
+         
+                 
+
+     
+     
+         Computers
+         
+                 
+                      
+                 
+     
+         Desktops
+         
+
+     
+     
+         Notebooks
+         
+
+     
+     
+         Accessories
+         
+
+     
+                 
+
+     
+     
+         Electronics
+         
+                 
+                      
+                 
+     
+         Camera, photo
+         
+
+     
+     
+         Cell phones
+         
+
+     
+                 
+
+     
+     
+         Apparel & Shoes
+         
+                 
+
+     
+     
+         Digital downloads
+         
+                 
+
+     
+     
+         Jewelry
+         
+                 
+
+     
+     
+         Gift Cards
+         
+                 
+
+     
+         
+     
+     
+
+         
+         
+         
+         
+             
+             
+         
+         
+             
+
+     
+     
+
+     
+         
+         Cart
+         
+         Address
+         
+         Shipping
+         
+         Payment
+         
+         Confirm
+         
+         Complete
+         
+         
+     
+
+
+     
+         Shopping cart
+     
+     
+         
+
+     
+     
+ Your Shopping Cart is empty!    
+
+
+     
+
+
+     
+
+
+         
+         
+     
+     
+
+     
+         
+             Information
+             
+                     Sitemap
+                 Shipping & Returns
+                 Privacy Notice
+                 Conditions of Use
+                 About us
+                 Contact us
+             
+         
+         
+             Customer service
+             
+                 Search 
+                     News
+                                     Blog
+                                                     Recently viewed products
+                                     Compare products list
+                                     New products
+             
+         
+         
+             My account
+             
+                 My account
+                     Orders
+                                     Addresses
+                                     Shopping cart
+                                     Wishlist
+             
+         
+         
+             Follow us
+             
+                     Facebook
+                                                     Twitter
+                                                     RSS
+                                                     YouTube
+                                                     Google+
+             
+         
+     
+     
+         Powered by nopCommerce
+         
+     
+     
+         Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
+     
+     
+         
+
+
+     
+     
+
+
+
+
+
+
+
+     
+     
+
+
+

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for locator('body')
    23 × locator resolved to <body>…</body>
       - unexpected value "
    







     





    
    
        
        


    
    
        
            
        
    
    
        
    
        
            Register
            Log in
                            
                
                    Shopping cart
                    (0)
                
            
                    
                
                    Wishlist
                    (0)
                
            
        
    
        


        
    
        
You have no items in your shopping cart.        
    


    
    
        
    
    Search
    
        
            
        

    
    
        
            
        
        
            
        
        
            
        
        
    


        
            


    
    
        Books
        
                

    
    
        Computers
        
                
                
    
        Desktops
        

    
    
        Notebooks
        

    
    
        Accessories
        

    
                

    
    
        Electronics
        
                
                
    
        Camera, photo
        

    
    
        Cell phones
        

    
                

    
    
        Apparel & Shoes
        
                

    
    
        Digital downloads
        
                

    
    
        Jewelry
        
                

    
    
        Gift Cards
        
                

    
    




    
        
            

            Categories
        
    
    
        
    
        Books
        
                

    
    
        Computers
        
                
                     
                
    
        Desktops
        

    
    
        Notebooks
        

    
    
        Accessories
        

    
                

    
    
        Electronics
        
                
                     
                
    
        Camera, photo
        

    
    
        Cell phones
        

    
                

    
    
        Apparel & Shoes
        
                

    
    
        Digital downloads
        
                

    
    
        Jewelry
        
                

    
    
        Gift Cards
        
                

    
        
    
    

        
        
        
        
            
            
        
        
            

    
    

    
        
        Cart
        
        Address
        
        Shipping
        
        Payment
        
        Confirm
        
        Complete
        
        
    


    
        Shopping cart
    
    
        

    
    
Your Shopping Cart is empty!    


    


    


        
        
    
    

    
        
            Information
            
                    Sitemap
                Shipping & Returns
                Privacy Notice
                Conditions of Use
                About us
                Contact us
            
        
        
            Customer service
            
                Search 
                    News
                                    Blog
                                                    Recently viewed products
                                    Compare products list
                                    New products
            
        
        
            My account
            
                My account
                    Orders
                                    Addresses
                                    Shopping cart
                                    Wishlist
            
        
        
            Follow us
            
                    Facebook
                                                    Twitter
                                                    RSS
                                                    YouTube
                                                    Google+
            
        
    
    
        Powered by nopCommerce
        
    
    
        Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
    
    
        


    
    







    
    


"

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Register":
      - /url: /register
  - listitem:
    - link "Log in":
      - /url: /login
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
- text: You have no items in your shopping cart.
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- list:
  - listitem:
    - link "Cart":
      - /url: /cart
  - listitem: Address
  - listitem: Shipping
  - listitem: Payment
  - listitem: Confirm
  - listitem: Complete
- heading "Shopping cart" [level=1]
- text: Your Shopping Cart is empty!
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  226 | test('TC_CHK_09 Verify Order Confirmation Message', async ({ page }) => {
  227 | 
  228 |     // Open homepage
  229 |     await page.goto(
  230 |         'https://demowebshop.tricentis.com'
  231 |     );
  232 | 
  233 |     // Verify homepage visible
  234 |     await expect(page.locator('body'))
  235 |         .toContainText('Welcome to our store');
  236 | });
  237 | 
  238 | 
  239 | // TC_CHK_10 → Verify Required Field Validation
  240 | 
  241 | test('TC_CHK_10 Verify Required Field Validation', async ({ page }) => {
  242 | 
  243 |     const checkoutPage = new CheckoutPage(page);
  244 | 
  245 |     // Open checkout page
  246 |     await page.goto(
  247 |         'https://demowebshop.tricentis.com/onepagecheckout'
  248 |     );
  249 | 
  250 |     // Verify checkout page visible
  251 |     await expect(page.locator('body'))
  252 |         .toBeVisible();
  253 | });
  254 | 
  255 | 
  256 | // TC_CHK_11 → Verify Invalid Zip Code Handling
  257 | 
  258 | test('TC_CHK_11 Verify Invalid Zip Code Handling', async ({ page }) => {
  259 | 
  260 |     const checkoutPage = new CheckoutPage(page);
  261 | 
  262 |     // Open product page
  263 |     await checkoutPage.gotoProductPage();
  264 | 
  265 |     // Add product
  266 |     await checkoutPage.addProductForCheckout();
  267 | 
  268 |     // Open cart
  269 |     await checkoutPage.openCart();
  270 | 
  271 |     // Proceed checkout
  272 |     await checkoutPage.proceedToCheckout();
  273 | 
  274 |     // Guest checkout
  275 |     await checkoutPage.checkoutAsGuestButton.click();
  276 | 
  277 |     // Enter invalid zip
  278 |     await checkoutPage.zipInput.fill('@@@@');
  279 | 
  280 |     // Verify value entered
  281 |     await expect(checkoutPage.zipInput)
  282 |         .toHaveValue('@@@@');
  283 | });
  284 | 
  285 | 
  286 | // TC_CHK_12 → Verify Checkout Page Refresh
  287 | 
  288 | test('TC_CHK_12 Verify Checkout Page Refresh', async ({ page }) => {
  289 | 
  290 |     const checkoutPage = new CheckoutPage(page);
  291 | 
  292 |     // Open product page
  293 |     await checkoutPage.gotoProductPage();
  294 | 
  295 |     // Add product
  296 |     await checkoutPage.addProductForCheckout();
  297 | 
  298 |     // Open cart
  299 |     await checkoutPage.openCart();
  300 | 
  301 |     // Refresh page
  302 |     await page.reload();
  303 | 
  304 |     // Verify cart still visible
  305 |     await expect(page.locator('body'))
  306 |         .toContainText('Shopping cart');
  307 | });
  308 | 
  309 | // TC_CHK_13 → Verify Checkout Total Visibility
  310 | 
  311 | test('TC_CHK_13 Verify Checkout Total Visibility', async ({ page }) => {
  312 | 
  313 |     const checkoutPage = new CheckoutPage(page);
  314 | 
  315 |     // Open product page
  316 |     await checkoutPage.gotoProductPage();
  317 | 
  318 |     // Add product
  319 |     await checkoutPage.addProductForCheckout();
  320 | 
  321 |     // Open cart
  322 |     await checkoutPage.openCart();
  323 | 
  324 |     // Verify cart total visible
  325 |     await expect(page.locator('body'))
> 326 |         .toContainText('Total');
      |          ^ Error: expect(locator).toContainText(expected) failed
  327 | });
  328 | 
  329 | // TC_CHK_14 → Verify Async Checkout Loading
  330 | 
  331 | test('TC_CHK_14 Verify Async Checkout Loading', async ({ page }) => {
  332 | 
  333 |     const checkoutPage = new CheckoutPage(page);
  334 | 
  335 |     // Open product page
  336 |     await checkoutPage.gotoProductPage();
  337 | 
  338 |     // Add product
  339 |     await checkoutPage.addProductForCheckout();
  340 | 
  341 |     // Wait for async loading
  342 |     await page.waitForLoadState('networkidle');
  343 | 
  344 |     // Verify success notification
  345 |     await expect(checkoutPage.successBar)
  346 |         .toContainText('The product has been added');
  347 | 
  348 |     // Screenshot
  349 |     await page.screenshot({
  350 |         path: 'screenshots/checkout-loading.png',
  351 |         fullPage: true
  352 |     });
  353 | });
  354 | 
  355 | 
  356 | // TC_CHK_15 → Verify Checkout API Response
  357 | 
  358 | test('TC_CHK_15 Verify Checkout API Response', async ({ page }) => {
  359 | 
  360 |     // Open checkout page
  361 |     const response = await page.goto(
  362 |         'https://demowebshop.tricentis.com/cart'
  363 |     );
  364 | 
  365 |     // Verify response code
  366 |     expect(response.status()).toBe(200);
  367 | });
```