class ElementUtil{
     
    doClick(element)
    {
        element.waitForDisplayed() 
        element.click(); 
    }

    doClick2(element)
    {
        element.waitForDisplayed() 
        element.click();      
    }
  
    doSwitchToFrame(element)
    {
        browser.switchToFrame(element)
    }
     
    doClearValue(element)
    {
        element.clearValue();
    }
    doSetValue(element,value)
    {
        element.waitForDisplayed();
        element.setValue(value)  
    }

    doSetValue(element,value)
    {
        element.waitForDisplayed(); 
        element.setValue(value)         
    }
 
   getText(element){
        element.waitForDisplayed();
        return element.getText();
    }

    getByTagName(element)
    {    
        element.waitForDisplayed();
        return element.getTagName()
    }
   
    isDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed();
    } 

    isClickable(element)
    {   element.waitForDisplayed()
        return element.isClickable();
    }

    findByTagName(element)
    {
        element.getByTagName()
    }
   
    setViewPort()
    {
        browser.setWindowSize(1200,1000);
    }

    getPageTitle(title)
    {
        browser.waitUntil(function(){
            return browser.getTitle()=== title

        },10000,'Timeout')
        return browser.getTitle()
    }

    populateListValues(element1,element2,value)
    {
        element1.click()
        element1.setValue(value)
        browser.pause(1000)
        element2.isDisplayed()
        element2.click()
        browser.pause(1000) 
    }

    populateAutoComplete(element1,element2,element3,value){
     element1.click()
     element1.setValue(value)   
     browser.pause(3000)
     element2.click()   
   
      browser.pause(3000)
      element3.click()
      browser.pause(3000)
    }   

    doScrollIntoView(element)
    {
        element.scrollIntoView()
    } 
    doMoveTo(element)
    {
        browser.executeScript("window.scrollTo(0, document.body.scrollHeight)")
        element.scrollIntoView({block: "end", inline: "nearest"})
        element.moveTo()
    } 
    doGetAttribute(element,attributeName)
    {
        element.getAttribute(attributeName)
    }

    doGetText(element)
    {
        element.waitForDisplayed();
        element.getValue()
    }

    doMovePosition(element)
    {
        element.scroll()      
    }
    warningIconIsNotPresent(element) {
        try 
        {     
            return !element.isVisible()          
        } catch (error) {  
          return true
        }
      }
}
export default new ElementUtil()