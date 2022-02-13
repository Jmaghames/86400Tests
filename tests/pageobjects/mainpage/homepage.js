import ElementUtil from '../../../utils/elementUtils'
import Page from '../page'

class homePage extends Page { 

open () {
    ElementUtil.setViewPort();
    return super.open('/');
}

get searchbox() { return $('//input[@id="gh-ac"]')} 
get searchbutton() { return $('//input[@id="gh-btn"]')} 

searchFor(searchword)
{
    ElementUtil.doSetValue(this.searchbox,searchword);
    ElementUtil.doClick(this.searchbutton);
}

}
export default new homePage();