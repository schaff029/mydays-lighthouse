class ElasticQuery {
  constructor() {}

  /**
   * @param {Date} timestamp
   */
  setTimestamp(timestamp) {
    this.timestamp = timestamp;
  }
  getTimestamp() {
    return this.timestamp;
  }

  /**
   * @param {string} userAgent
   */
  setUserAgent(userAgent) {
    this.userAgent = userAgent;
  }
  getUserAgent() {
    return this.userAgent;
  }

  /**
   * @param {string} page
   */
  setPage(page) {
    this.page = page;
  }
  getPage() {
    return this.page;
  }

  setAverageAnalyticsTime(time) {
    this.averageAnalyticsTime = time;
  }

  setIsMobile(isMobile = false) {
    this.isMobile = isMobile;
  }

  /**
   * PERFORMANCE BLOCK
   */

  /**
   * @param {float} performance
   */
  setPerformance(performance) {
    this.performance = performance;
  }

  /**
   * @param {float} firstContentfullPaint
   */
  setFirstContentfulPaint(firstContentfulPaint) {
    this.firstContentfulPaint = firstContentfulPaint;
  }

  /**
   * @param {float} firstMeaningfullPaint
   */
  setFirstMeaningfulPaint(firstMeaningfulPaint) {
    this.firstMeaningfulPaint = firstMeaningfulPaint;
  }

  /**
   * @param {float} speedIndex
   */
  setSpeedIndex(speedIndex) {
    this.speedIndex = speedIndex;
  }

  /**
   * @param {float} interactive
   */
  setInteractive(interactive) {
    this.interactive = interactive;
  }

  /**
   * @param {float} firstCPUIdle
   */
  setFirstCPUIdle(firstCPUIdle) {
    this.firstCPUIdle = firstCPUIdle;
  }

  /**
   * @param {float} estInputLatency
   */
  setEstimatedInputLatency(estInputLatency) {
    this.estimatedInputLatency = estInputLatency;
  }

  /**
   * @param {float} renderBlockingResources
   */
  setRenderBlockingResources(renderBlockingResources) {
    this.renderBlockingResources = renderBlockingResources;
  }

  /**
   * @param {array} renderBlockingResourcesData
   */
  setRenderBlockingResourcesData({ details } = {}) {
    if (details) {
      this.renderBlockingResourcesData = details.items;
    } else {
      this.renderBlockingResourcesData = [];
    }
  }

  /**
   * @param {float} usesResponsiveImages
   */
  setUsesResponsiveImages({ displayValue } = []) {
    if ( 'object' == typeof displayValue ) {
      this.usesResponsiveImages = displayValue.pop();
    } else if ('undefined' == typeof displayValue) {
      this.usesResponsiveImages = '';
    } else {
      this.usesResponsiveImages = displayValue.replace(/[^0-9]+/g, '');
    }
  }

  /**
   * @param {array} usesResponsiveImagesData
   */
  setUsesResponsiveImagesData({ details } = {}) {
    if (details) {
      this.usesResponsiveImagesData = details.items;
    } else {
      this.usesResponsiveImagesData = [];
    }
  }

  /**
   * @param {float} offscreenImages
   */
  setOffscreenImages({ displayValue } = []) {
    if ( 'object' == typeof displayValue ) {
      this.offscreenImages = displayValue.pop();
    } else if ('undefined' == typeof displayValue) {
      this.offscreenImages = '';
    } else {
      this.offscreenImages = displayValue.replace(/[^0-9]+/g, '');
    }
  }

  /**
   * @param {array} offscreenImagesData
   */
  setOffscreenImagesData({ details } = {}) {
    if (details) {
      this.offscreenImagesData = details.items;
    } else {
      this.offscreenImagesData = [];
    }
  }

  /**
   * @param {float} unminifiedCss
   */
  setUnminifiedCss(unminifiedCss) {
    this.unminifiedCss = unminifiedCss;
  }

  /**
   * @param {array} unminifiedCssData
   */
  setUnminifiedCssData({ details } = {}) {
    if (details) {
      this.unminifiedCssData = details.items;
    } else {
      this.unminifiedCssData = [];
    }
  }

  /**
   * @param {float} unminifiedJS
   */
  setUnminifiedJS({ displayValue } = []) {
    if ( 'object' == typeof displayValue ) {
      this.unminifiedJS = displayValue.pop();
    } else if ('undefined' == typeof displayValue) {
      this.unminifiedJS = '';
    } else {
      this.unminifiedJS = displayValue.replace(/[^0-9]+/g, '');
    }
  }

  /**
   * @param {array} unminifiedJSData
   */
  setUnminifiedJSData({ details } = {}) {
    if (details) {
      this.unminifiedJSData = details.items;
    } else {
      this.unminifiedJSData = [];
    }
  }

  /**
   * @param {float} unusedCssRules
   */
  setUnusedCssRules({ displayValue } = []) {
    if ( 'object' == typeof displayValue ) {
      this.unusedCssRules = displayValue.pop();
    } else if ('undefined' == typeof displayValue) {
      this.unusedCssRules = '';
    } else {
      this.unusedCssRules = displayValue.replace(/[^0-9]+/g, '');
    }
  }

  /**
   * @param {array} unusedCssRulesData
   */
  setUnusedCssRulesData({ details } = {}) {
    if (details) {
      this.unusedCssRulesData = details.items;
    } else {
      this.unusedCssRulesData = [];
    }
  }

  /**
   * @param {float} usesOptimizedImages
   */
  setUsesOptimizedImages({ displayValue } = []) {
    if ( 'object' == typeof displayValue ) {
      this.usesOptimizedImages = displayValue.pop();
    } else if ('undefined' == typeof displayValue) {
      this.usesOptimizedImages = '';
    } else {
      this.usesOptimizedImages = displayValue.replace(/[^0-9]+/g, '');
    }
  }

  /**
   * @param {array} usesOptimizedImagesData
   */
  setUsesOptimizedImagesData({ details } = {}) {
    if (details) {
      this.usesOptimizedImagesData = details.items;
    } else {
      this.usesOptimizedImagesData = [];
    }
  }

  /**
   * @param {float} usesWebpImages
   */
  setUsesWebpImages({ displayValue } = []) {
    if ( 'object' == typeof displayValue ) {
      this.usesWebpImages = displayValue.pop();
    } else if ('undefined' == typeof displayValue) {
      this.usesWebpImages = '';
    } else {
      this.usesWebpImages = displayValue.replace(/[^0-9]+/g, '');
    }

    //this.usesWebpImages = displayValue;
  }

  /**
   * @param {float} usesRelPreconnect
   */
  setUsesRelPreconnect(usesRelPreconnect) {
    this.usesRelPreconnect = usesRelPreconnect;
  }

  /**
   * @param {float} timeToFirstByte
   */
  setTimeToFirstByte(timeToFirstByte) {
    if ( 'object' == typeof displayValue ) {
      this.timeToFirstByte = displayValue.pop();
    } else if ('undefined' == typeof displayValue) {
      this.timeToFirstByte = '';
    } else {
      this.timeToFirstByte = displayValue.replace(/[^0-9]+/g, '');
    }

    //this.timeToFirstByte = timeToFirstByte;
  }

  /**
   * @param {float} totalByteWeight
   */
  setTotalByteWeight({ displayValue } = []) {
    if ( 'object' == typeof displayValue ) {
      this.totalByteWeight = displayValue.pop();
    } else if ('undefined' == typeof displayValue) {
      this.totalByteWeight = '';
    } else {
      this.totalByteWeight = displayValue.replace(/[^0-9]+/g, '');
    }

    //this.totalByteWeight = displayValue;
  }

  /**
   * @param {float} totalByteWeightData
   */
  setTotalByteWeightData({ details } = {}) {
    if (details) {
      this.totalByteWeightData = details.items;
    } else {
      this.totalByteWeightData = [];
    }
  }

  /**
   * @param {float} domSize
   */
  setDomSize(domSize) {
    this.domSize = domSize;
  }

  /**
   * @param {float} bootupTime
   */
  setBootupTime(bootupTime) {
    this.bootupTime = bootupTime;
  }

  /**
   * @param {float} mainthreadWorkBreakdown
   */
  setMainThreadWorkBreakdown(mainthreadWorkBreakdown) {
    this.mainthreadWorkBreakdown = parseInt(mainthreadWorkBreakdown, 10);
  }

  /**
   * BEST PRACTICE BLOCK
   */

  /**
   * @param {float} bestpractice
   */
  setBestPractice(bestpractice) {
    this.bestPractice = bestpractice;
  }

  setUsesPassiveEventListeners(usesPassiveEventListeners) {
    this.usesPassiveEventListeners = usesPassiveEventListeners;
  }

  setUsesPassiveEventListenersData({ details } = {}) {
    if (details) {
      this.usesPassiveEventListenersData = details.items;
    } else {
      this.usesPassiveEventListenersData = [];
    }
  }

  setNoDocumentWrite(noDocumentWrite) {
    this.noDocumentWrite = noDocumentWrite;
  }

  setNoDocumentWriteData({ details } = {}) {
    if (details) {
      this.noDocumentWriteData = details.items;
    } else {
      this.noDocumentWriteData = [];
    }
  }

  setExternalAnchorsUseRelNoopener(externalAnchorsUseRelNoopener) {
    this.externalAnchorsUseRelNoopener = externalAnchorsUseRelNoopener;
  }

  setExternalAnchorsUseRelNoopenerData({ details } = {}) {
    if (details) {
      this.externalAnchorsUseRelNoopenerData = details.items;
    } else {
      this.externalAnchorsUseRelNoopenerData = [];
    }
  }

  setGeolocationOnStart(geolocationOnStart) {
    this.geolocationOnStart = geolocationOnStart;
  }

  setNoVulnerableLibraries(noVulnerableLibraries) {
    this.noVulnerableLibraries = noVulnerableLibraries;
  }

  setNoVulnerableLibrariesData({ details } = {}) {
    if (details) {
      this.noVulnerableLibrariesData = details.items;
    } else {
      this.noVulnerableLibrariesData = [];
    }
  }

  setNotificationOnStart(notificationOnStart) {
    this.notificationOnStart = notificationOnStart;
  }

  setDeprecations(deprecations) {
    this.deprecations = deprecations;
  }

  setDeprecationsData({ details } = {}) {
    if (details) {
      this.deprecationsData = details.items;
    } else {
      this.deprecationsData = [];
    }
  }

  setErrorsInConsole(errorsInConsole) {
    this.errorsInConsole = errorsInConsole;
  }

  setErrorsInConsoleData({ details } = {}) {
    if (details) {
      this.errorsInConsoleData = details.items;
    } else {
      this.errorsInConsoleData = [];
    }
  }

  /**
   * SEO BLOCK
   */

  /**
   * @param {float} seo
   */
  setSeo(seo) {
    this.seo = seo;
  }

  setViewport(viewport) {
    this.viewport = viewport;
  }

  setDocumentTitle(documentTitle) {
    this.documentTitle = documentTitle;
  }

  setMetaDescription(metaDescription) {
    this.metaDescription = metaDescription;
  }

  setHttpStatusCode(httpStatusCode) {
    this.httpStatusCode = httpStatusCode;
  }

  setLinkText(linkText) {
    this.linkText = linkText;
  }

  setLinkTextData({ details } = {}) {
    if (details) {
      this.linkTextData = details.items;
    } else {
      this.linkTextData = [];
    }
  }

  setIsCrawlable(isCrawlable) {
    this.isCrawlable = isCrawlable;
  }

  setRobotsTxt(robotsTxt) {
    this.robotsTxt = robotsTxt;
  }

  setHreflang(hreflang) {
    this.hreflang = hreflang;
  }

  setCanonical(canonical) {
    this.canonical = canonical;
  }

  setFontsize(fontsize) {
    this.fontsize = fontsize;
  }

  setFontsizeData({ details } = {}) {
    let data = [];
    if (details) {
      let data = details.items;
    }

    this.fontsizeData = data;
  }

  /**
   * ACCESSIBILITY BLOCK
   */

  setAccessibility(accessibility) {
    this.accessibility = accessibility;
  }

  setDuplicateId(duplicateId) {
    this.duplicateId = duplicateId;
  }

  setDuplicateIdData({ details } = {}) {
    if (details) {
      this.duplicateIdData = details.items;
    } else {
      this.duplicateIdData = [];
    }
  }
}

module.exports = ElasticQuery;
