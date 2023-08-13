import { expect as expectchai } from 'chai';



describe('Ui Controls Test Suite', async () => {
    xit('Ui Controls', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        await $("#username").setValue("rahulshettyacademy")
        await $("#password").setValue("learnineg")
        await $("#terms").click()
        const radioButtons = await $$("span.radiotextsty")
        await radioButtons[1].click()
        await $(".modal-body").waitForDisplayed()
        await $("div>button#cancelBtn").click()
        console.log(await $$("label.customradio")[0].$("input[value='admin']").isSelected())
        await radioButtons[1].click()
        await $("div>button#okayBtn").click()
        await radioButtons[0].click()
        console.log(await $(".modal-body").isDisplayed());
        await expect(await $(".modal-body")).not.toBeDisplayed()
        const dropdown = await $("select.form-control")
        await dropdown.selectByAttribute("value", "teach")
        await browser.pause(3000)
        await dropdown.selectByVisibleText("Consultant")
        await browser.pause(3000)
        await dropdown.selectByIndex(0)
        await browser.pause(3000)
        console.log(await dropdown.getValue());
        expectchai(await dropdown.getValue()).to.equal("stud")

    })
    it('Dynamic dropdown Controls', async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("input#autocomplete").setValue("In")
        // await $("//ul/li/div[text()='India']").click()
        await browser.pause(3000)
        let countries = await $$(".ui-menu li div")
        for (let country of countries) {
            if (await country.getText() === "India") {
                await country.click()
            }
        }
        await browser.pause(3000)
        // await browser.pause(2000)
        // for(let i=0;i<countries.length;i++){
        //     console.log(await countries[i].getText());
        // }
    })
})