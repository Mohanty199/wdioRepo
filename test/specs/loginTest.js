describe('Ecommerce Application', async () => {
    xit('Login Fail Page', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learnineg")
        await $("#terms").click()
        await $("#signInBtn").click()
        await $("#signInBtn").waitUntil(async () => await $("#signInBtn").getAttribute('value') === 'Sign In', {
            timeout: 5000,
            timeoutMsg: 'Error msg not showing'
        })
        console.log(await $(".alert.alert-danger").getText());
        await expect($("p")).toHaveTextContaining("rahulshettyacademy")
    })
    it('Login Success Page', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learning")
        await $("#terms").click()
        await $("#signInBtn").click()
        await expect(browser).toHaveTitle("ProtoCommerce")
        await expect(browser).toHaveUrl("https://rahulshettyacademy.com/angularpractice/shop")
        await $("//a[text()='ProtoCommerce Home']").waitForExist()
    })

})  
 // huytfxdzszdxdzsdssts