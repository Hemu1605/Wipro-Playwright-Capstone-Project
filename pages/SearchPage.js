class SearchPage {

    constructor(page) {

        this.page = page;

        this.searchBox = page.locator('#small-searchterms');

        this.searchButton = page.locator('input[value="Search"]');

        this.productTitles = page.locator('.product-title');

        this.noResultMessage = page.locator('.no-result');

        this.sortDropdown = page.locator('#products-orderby');

        this.productPrices = page.locator('.prices');

        this.searchResultGrid = page.locator('.product-grid');

        this.searchInput = page.locator('#small-searchterms');
    }

    async goto() {

        await this.page.goto('/');
    }

    async searchProduct(productName) {

        await this.searchBox.fill(productName);

        await this.searchButton.click();
    }
}

module.exports = { SearchPage };