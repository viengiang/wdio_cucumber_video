/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class HomePage {
    public get menuAccessibility () {
        return $('~Accessibility');
    }

    public get menuRandom () {
        return $('~Random');
    }
}

export default new HomePage();