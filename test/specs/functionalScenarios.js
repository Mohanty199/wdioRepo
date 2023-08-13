describe("Functional Suite", async () => {
    it("Mouse hovering", async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#mousehover").scrollIntoView()
        await browser.pause(3000)
        await $("#mousehover").moveTo()
        await browser.pause(3000)
        await $("=Top").click()
        //await browser.pause(3000)
        // await $("=Top").click()
        // huytfxdzszdxdzsdssts
       

    })
})