// $Id$

/**
 * @file
 * Contentflow for Drupal
 *
 * @author
 * Stefan Auditor <stefan.auditor@erdfisch.de>
 *
 * @see
 * ContentFlowAddOn_DEFAULT.js
 */

Drupal.behaviors.contentflow = function(context) {
  new ContentFlowAddOn('drupal', {
    conf: {
    },
    init: function() {
    },
    onloadInit: function(flow) {
    },
    afterContentFlowInit: function(flow) {
    },
	  ContentFlowConf: {
      loadingTimeout: Drupal.settings.contentflow.loadingTimeout,
      activeElement: Drupal.settings.contentflow.activeElement,
      maxItemHeight: Drupal.settings.contentflow.maxItemHeight,
      scaleFactor: Drupal.settings.contentflow.scaleFactor,
      scaleFactorLandscape: Drupal.settings.contentflow.scaleFactorLandscape,
      scaleFactorPortrait: Drupal.settings.contentflow.scaleFactorPortrait,
      fixItemSize: Drupal.settings.contentflow.fixItemSize,
      relativeItemPosition: Drupal.settings.contentflow.relativeItemPosition,
      circularFlow: Drupal.settings.contentflow.circularFlow,
      verticalFlow: Drupal.settings.contentflow.verticalFlow,
      visibleItems: Drupal.settings.contentflow.visibleItems,
      endOpacity: Drupal.settings.contentflow.endOpacity,
      startItem:  Drupal.settings.contentflow.startItem,
      scrollInFrom: Drupal.settings.contentflow.scrollInFrom,
      flowSpeedFactor: Drupal.settings.contentflow.flowSpeedFactor,
      flowDragFriction: Drupal.settings.contentflow.flowDragFriction,
      scrollWheelSpeed: Drupal.settings.contentflow.scrollWheelSpeed,
      reflectionColor: Drupal.settings.contentflow.reflectionColor,
      reflectionHeight: Drupal.settings.contentflow.reflectionHeight,
      reflectionGap: Drupal.settings.contentflow.reflectionGap,
      keys: {
          13: function() { this.conf.onclickActiveItem(this._activeItem) },
          37: function() { this.moveTo('pre') }, 
          38: function() { this.moveTo('visibleNext') },
          39: function() { this.moveTo('next') },
          40: function() { this.moveTo('visiblePre') }
      },
      onclickInactiveItem : function(item) {
      },
      onclickActiveItem: function(item) {
        var url, target;
        if (url = item.content.getAttribute('href')) {
          target = item.content.getAttribute('target');
        }
        else if (url = item.element.getAttribute('href')) {
          target = item.element.getAttribute('target');
        }
        else if (url = item.content.getAttribute('src')) {
          target = item.content.getAttribute('target');
        }

        if (url) {
          if (target) {
            window.open(url, target).focus();
          }
          else {
            window.location.href = url;
          }
        }
      },
      onMakeInactive: function(item) {
      },
      onMakeActive: function(item) {
      },
      onReachTarget: function(item) {
      },
      onMoveTo: function(item) {
      },
      onDrawItem: function(item) {
      },
      onclickPreButton: function(event) {
        this.moveToIndex('pre');
        Event.stop(event);
      },
      onclickNextButton: function(event) {
        this.moveToIndex('next');
        Event.stop(event);
      },
    }
  });
}

