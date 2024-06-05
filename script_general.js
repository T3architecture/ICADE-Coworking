(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"borderRadius":0,"definitions": [{"data":{"name":"IconButton VR"},"minWidth":60,"shadow":false,"width":60,"cursor":"hand","paddingTop":0,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","paddingRight":0,"toolTipHorizontalAlign":"center","height":60,"transparencyActive":true,"iconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89.png","mode":"push","maxHeight":60,"class":"IconButton","maxWidth":60,"rollOverIconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89_rollover.png","borderRadius":0,"borderSize":0,"minHeight":60},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A_camera","media":"this.panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4_camera","media":"this.panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6_camera","media":"this.panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6"}],"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"minHeight":50,"playbackBarBorderColor":"#AAAAAA","displayTooltipInSurfaceSelection":true,"minWidth":100,"subtitlesTextShadowVerticalLength":1,"playbackBarBorderSize":2,"toolTipShadowBlurRadius":3,"toolTipFontFamily":"Arial","playbackBarBorderRadius":4,"playbackBarHeight":20,"playbackBarProgressBorderColor":"#000000","vrPointerColor":"#FFFFFF","id":"MainViewer","subtitlesHorizontalAlign":"center","subtitlesVerticalAlign":"bottom","toolTipShadowOpacity":1,"toolTipBorderRadius":3,"data":{"name":"Main Viewer"},"subtitlesEnabled":true,"playbackBarHeadWidth":6,"progressBackgroundColorRatios":[0,1],"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadow":true,"toolTipBackgroundColor":"#999999","progressRight":10,"playbackBarHeadBorderSize":0,"toolTipFontSize":12,"playbackBarHeadShadowBlurRadius":3,"subtitlesPaddingLeft":5,"progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"transitionMode":"blending","toolTipBorderColor":"#767676","toolTipTextShadowColor":"#666666","progressBarBackgroundColorRatios":[0,1],"progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","playbackBarBottom":10,"toolTipHorizontalAlign":"center","translationTransitionDuration":1000,"playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarProgressBorderSize":0,"progressBorderColor":"#AAAAAA","subtitlesPaddingRight":5,"subtitlesTop":0,"progressBarBackgroundColor":["#222222","#444444"],"subtitlesBottom":50,"progressBackgroundOpacity":1,"playbackBarHeadHeight":30,"class":"ViewerArea","toolTipPaddingLeft":6,"toolTipShadowVerticalLength":0,"playbackBarHeadBorderRadius":0,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"subtitlesPaddingTop":5,"subtitlesPaddingBottom":5,"doubleClickAction":"toggle_fullscreen","borderSize":0,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowColor":"#000000","progressBottom":1,"subtitlesShadow":false,"progressBarOpacity":1,"playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","toolTipShadowSpread":0,"progressHeight":20,"subtitlesTextShadowBlurRadius":0,"toolTipFontStyle":"normal","subtitlesTextDecoration":"none","displayTooltipInTouchScreens":true,"shadow":false,"progressBarBorderRadius":4,"subtitlesFontWeight":"normal","progressBorderSize":2,"playbackBarProgressBackgroundColorRatios":[0,1],"toolTipTextShadowBlurRadius":3,"toolTipPaddingRight":6,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadShadowVerticalLength":0,"subtitlesFontFamily":"Arial","paddingTop":0,"toolTipFontWeight":"normal","toolTipTextShadowOpacity":0,"playbackBarProgressOpacity":1,"paddingBottom":0,"firstTransitionDuration":0,"surfaceReticleColor":"#FFFFFF","toolTipFontColor":"#606060","subtitlesTextShadowOpacity":1,"progressBarBorderSize":0,"vrPointerSelectionColor":"#FF0000","transitionDuration":500,"paddingLeft":0,"progressBorderRadius":4,"toolTipPaddingBottom":4,"top":0,"surfaceReticleOpacity":0.6,"propagateClick":false,"toolTipShadowHorizontalLength":0,"bottom":0,"progressLeft":10,"subtitlesBorderSize":0,"paddingRight":0,"vrPointerSelectionTime":1500,"playbackBarOpacity":1,"subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333333","playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesOpacity":1,"playbackBarLeft":0,"toolTipBorderSize":1,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"toolTipPaddingTop":4,"toolTipDisplayTime":600,"playbackBarRight":0,"toolTipOpacity":0.5,"playbackBarBackgroundColorDirection":"vertical","left":0,"playbackBarHeadBackgroundColorRatios":[0,1],"borderRadius":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadOpacity":1,"playbackBarProgressBorderRadius":0,"subtitlesGap":0,"right":0},{"itemThumbnailShadowOpacity":0.54,"gap":10,"itemLabelTextDecoration":"none","right":"0.12%","minWidth":20,"shadow":false,"itemMode":"normal","itemThumbnailShadowHorizontalLength":3,"itemThumbnailShadowBlurRadius":8,"itemLabelPosition":"bottom","itemLabelHorizontalAlign":"center","paddingTop":10,"itemLabelFontFamily":"Arial","itemLabelGap":9,"backgroundOpacity":0,"horizontalAlign":"left","itemBackgroundColor":[],"paddingBottom":10,"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","data":{"name":"ThumbnailList35762"},"itemLabelFontColor":"#FFFFFF","itemHorizontalAlign":"center","itemThumbnailShadow":true,"scrollBarMargin":2,"itemBorderRadius":0,"itemPaddingRight":3,"paddingLeft":20,"itemThumbnailWidth":75,"playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","itemPaddingLeft":3,"itemOpacity":1,"propagateClick":false,"verticalAlign":"top","bottom":"0.02%","itemBackgroundOpacity":0,"itemLabelFontSize":14,"paddingRight":20,"itemThumbnailScaleMode":"fit_outside","scrollBarOpacity":0.5,"itemThumbnailShadowVerticalLength":3,"height":135.02,"itemLabelFontWeight":"normal","toolTipHorizontalAlign":"center","itemBackgroundColorDirection":"vertical","itemPaddingTop":3,"selectedItemLabelFontColor":"#FFCC00","rollOverItemBackgroundOpacity":0,"scrollBarWidth":10,"itemThumbnailShadowColor":"#000000","scrollBarVisible":"rollOver","rollOverItemLabelFontWeight":"normal","itemThumbnailBorderRadius":50,"layout":"horizontal","itemBackgroundColorRatios":[],"class":"ThumbnailList","left":"0.01%","selectedItemLabelFontWeight":"bold","itemVerticalAlign":"middle","scrollBarColor":"#FFFFFF","itemThumbnailOpacity":1,"itemThumbnailShadowSpread":1,"itemLabelFontStyle":"normal","itemPaddingBottom":3,"borderRadius":5,"minHeight":20,"itemThumbnailHeight":75,"borderSize":0},{"borderRadius":0,"data":{"name":"Image4995"},"minWidth":80,"shadow":false,"width":80,"cursor":"hand","paddingTop":0,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","backgroundOpacity":0,"horizontalAlign":"left","paddingBottom":0,"paddingLeft":0,"top":21.17,"propagateClick":true,"verticalAlign":"top","paddingRight":0,"toolTipHorizontalAlign":"center","height":85,"click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"class":"Image","left":26.3,"maxWidth":80,"borderSize":0,"minHeight":80,"scaleMode":"fill"},{"data":{"name":"IconButton HS "},"minWidth":60,"shadow":false,"width":60,"cursor":"hand","paddingTop":0,"pressedIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed.png","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed_rollover.png","paddingRight":0,"toolTipHorizontalAlign":"center","height":60,"transparencyActive":true,"iconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628.png","mode":"toggle","maxHeight":60,"class":"IconButton","maxWidth":60,"borderRadius":0,"borderSize":0,"minHeight":60},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"hoverFactor":0,"id":"panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4_camera"},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"hoverFactor":0,"id":"panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A_camera"},{"hfov":360,"hfovMin":"135%","frames":[{"class":"CubicPanoramaFrame","stereoCube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":24576,"rowCount":4,"url":"media/panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A_0/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":48},{"tags":"ondemand","width":12288,"rowCount":2,"url":"media/panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A_0/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":24},{"tags":"mobilevr2gen","width":24576,"rowCount":1,"url":"media/panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A_0/vr2gen/{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":12}]},"thumbnailUrl":"media/panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A_t.jpg"}],"vfov":180,"pitch":0,"thumbnailUrl":"media/panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A_t.jpg","partial":false,"label":trans('panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A.label'),"id":"panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A","hfovMax":130,"class":"Panorama","data":{"label":"Bar"},"adjacentPanoramas":[{"panorama":"this.panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4","distance":20.32,"yaw":-16.4,"select":"this.overlay_E4E4F928_E942_DC04_41E6_BF0C461D689C.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_E4E4F928_E942_DC04_41E6_BF0C461D689C"},"class":"AdjacentPanorama","backwardYaw":-80.82},{"panorama":"this.panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6","distance":29.12,"yaw":0.12,"select":"this.overlay_E6737B71_E945_FC04_41E6_91B649987BA6.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_E6737B71_E945_FC04_41E6_91B649987BA6"},"class":"AdjacentPanorama"}],"overlays":["this.overlay_E4E4F928_E942_DC04_41E6_BF0C461D689C","this.overlay_E6737B71_E945_FC04_41E6_91B649987BA6"]},{"gap":3,"data":{"name":"-button set"},"minWidth":60,"shadow":false,"width":85,"paddingTop":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"paddingLeft":0,"top":"14.6%","scrollBarMargin":2,"propagateClick":true,"verticalAlign":"top","paddingRight":0,"overflow":"scroll","scrollBarOpacity":0.5,"children":["this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137"],"toolTipHorizontalAlign":"center","contentOpaque":false,"height":320,"layout":"vertical","creationPolicy":"inAdvance","scrollBarWidth":10,"scrollBarVisible":"rollOver","maxHeight":320,"class":"Container","maxWidth":60,"borderRadius":0,"scrollBarColor":"#000000","borderSize":0,"minHeight":320,"right":"0%"},{"data":{"name":"IconButton FB"},"minWidth":60,"shadow":false,"width":60,"cursor":"hand","paddingTop":0,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137","paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","paddingRight":0,"toolTipHorizontalAlign":"center","height":60,"click":"this.openLink(this.translate('LinkBehaviour_A99CB470_BF24_034B_41D8_32775ADC450A.source'), '_blank')","transparencyActive":true,"iconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137.png","mode":"push","rollOverIconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137_rollover.png","maxHeight":60,"class":"IconButton","maxWidth":60,"borderRadius":0,"borderSize":0,"minHeight":1},{"data":{"name":"IconButton GYRO"},"minWidth":60,"shadow":false,"width":60,"cursor":"hand","paddingTop":0,"pressedIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed.png","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed_rollover.png","paddingRight":0,"toolTipHorizontalAlign":"center","height":60,"transparencyActive":true,"iconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464.png","mode":"toggle","maxHeight":60,"class":"IconButton","maxWidth":60,"borderRadius":0,"borderSize":0,"minHeight":60},{"data":{"name":"Label28174"},"minWidth":280,"shadow":false,"width":280,"paddingTop":0,"textDecoration":"none","id":"label4056","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"fontFamily":"Arial","text":trans('label4056.text'),"paddingLeft":0,"top":17,"propagateClick":false,"fontColor":"#FFFFFF","paddingRight":0,"verticalAlign":"middle","toolTipHorizontalAlign":"center","height":50,"fontSize":30,"maxHeight":50,"class":"Label","maxWidth":280,"fontStyle":"normal","borderRadius":0,"borderSize":0,"minHeight":50,"fontWeight":"bold","right":"0.47%"},{"data":{"name":"IconButton FULLSCREEN"},"minWidth":60,"shadow":false,"width":60,"cursor":"hand","paddingTop":0,"pressedIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed.png","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","paddingLeft":0,"propagateClick":true,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed_rollover.png","paddingRight":0,"toolTipHorizontalAlign":"center","height":60,"transparencyActive":true,"iconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF.png","mode":"toggle","maxHeight":60,"class":"IconButton","maxWidth":60,"borderRadius":0,"borderSize":0,"minHeight":60},{"borderRadius":0,"data":{"name":"image button menu"},"minWidth":60,"shadow":false,"width":60,"cursor":"hand","paddingTop":0,"pressedIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed.png","id":"IconButton_AC819C46_BF7C_0354_415E_028207B038AC","backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"paddingLeft":0,"top":"6.78%","propagateClick":true,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed_rollover.png","paddingRight":0,"toolTipHorizontalAlign":"center","height":60,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); if(!this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F.get('visible')){ visibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) } else { invisibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) }","transparencyActive":true,"iconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC.png","mode":"toggle","maxHeight":60,"class":"IconButton","maxWidth":60,"borderSize":0,"minHeight":60,"right":"0.05%"},{"surfaceSelectionEnabled":false,"buttonToggleHotspots":"this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","gyroscopeEnabled":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","zoomEnabled":true,"buttonToggleGyroscope":"this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","aaEnabled":true,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","gyroscopeVerticalDraggingEnabled":true},{"hfov":360,"hfovMin":"135%","frames":[{"class":"CubicPanoramaFrame","stereoCube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":24576,"rowCount":4,"url":"media/panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6_0/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":48},{"tags":"ondemand","width":12288,"rowCount":2,"url":"media/panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6_0/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":24},{"tags":"mobilevr2gen","width":24576,"rowCount":1,"url":"media/panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6_0/vr2gen/{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":12}]},"thumbnailUrl":"media/panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6_t.jpg"}],"vfov":180,"pitch":0,"thumbnailUrl":"media/panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6_t.jpg","partial":false,"label":trans('panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6.label'),"id":"panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6","hfovMax":130,"class":"Panorama","data":{"label":"Salon 2"},"adjacentPanoramas":[{"panorama":"this.panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4","distance":29.56,"yaw":-76.28,"select":"this.overlay_F91ABDE2_E942_B404_41EC_6E982AFCB338.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F91ABDE2_E942_B404_41EC_6E982AFCB338"},"class":"AdjacentPanorama"},{"panorama":"this.panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A","distance":40.93,"yaw":-98.55,"select":"this.overlay_F92301F0_E943_EC04_41C2_57F57DEDBECA.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F92301F0_E943_EC04_41C2_57F57DEDBECA"},"class":"AdjacentPanorama"}],"overlays":["this.overlay_F91ABDE2_E942_B404_41EC_6E982AFCB338","this.overlay_F92301F0_E943_EC04_41C2_57F57DEDBECA"]},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"hoverFactor":0,"id":"panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6_camera"},{"hfov":360,"hfovMin":"135%","frames":[{"class":"CubicPanoramaFrame","stereoCube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":24576,"rowCount":4,"url":"media/panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4_0/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":48},{"tags":"ondemand","width":12288,"rowCount":2,"url":"media/panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4_0/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":24},{"tags":"mobilevr2gen","width":24576,"rowCount":1,"url":"media/panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4_0/vr2gen/{column}.jpg","height":2048,"class":"TiledImageResourceLevel","colCount":12}]},"thumbnailUrl":"media/panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4_t.jpg"}],"vfov":180,"pitch":0,"thumbnailUrl":"media/panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4_t.jpg","partial":false,"label":trans('panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4.label'),"id":"panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4","hfovMax":130,"class":"Panorama","data":{"label":"Salon 1"},"adjacentPanoramas":[{"panorama":"this.panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6","distance":23.28,"yaw":129.01,"select":"this.overlay_E79D9332_E946_EC04_41BC_4BAFD91202AC.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_E79D9332_E946_EC04_41BC_4BAFD91202AC"},"class":"AdjacentPanorama"},{"panorama":"this.panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A","distance":31.44,"yaw":-80.82,"select":"this.overlay_E67A2B01_E945_5C04_41C9_639C319C2536.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_E67A2B01_E945_5C04_41C9_639C319C2536"},"class":"AdjacentPanorama","backwardYaw":-16.4}],"overlays":["this.overlay_E79D9332_E946_EC04_41BC_4BAFD91202AC","this.overlay_E67A2B01_E945_5C04_41C9_639C319C2536"]},{"class":"PlayList","items":["this.PanoramaPlayListItem_FBBF7164_E95E_AC0C_41E2_A02961517340","this.PanoramaPlayListItem_FBBF5164_E95E_AC0C_41D6_402320BEAC57",{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6_camera","media":"this.panorama_E0E0B9FB_E93F_FC05_41E8_B9E8F712C8E6","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"areas":["this.HotspotPanoramaOverlayArea_E4CF399B_E942_DC04_41D4_F68DEE066352"],"data":{"label":"link","hasPanoramaAction":true},"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":6,"distance":50,"yaw":-16.4,"image":"this.res_FB0E90CF_E95E_AC1C_41E2_A2BCD74C8501","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-4.77,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_E4E4F928_E942_DC04_41E6_BF0C461D689C"},{"areas":["this.HotspotPanoramaOverlayArea_E6753B77_E945_FC0C_41D6_2108FBA152CB"],"data":{"label":"link","hasPanoramaAction":true},"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":6,"distance":50,"yaw":0.12,"image":"this.res_FB0E90CF_E95E_AC1C_41E2_A2BCD74C8501","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-3.33,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_E6737B71_E945_FC04_41E6_91B649987BA6"},{"areas":["this.HotspotPanoramaOverlayArea_E7B53E0F_E942_B41C_41E5_647500A50508"],"data":{"label":"link","hasPanoramaAction":true},"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":6,"distance":50,"yaw":-76.28,"image":"this.res_FB0E90CF_E95E_AC1C_41E2_A2BCD74C8501","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-3.28,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_F91ABDE2_E942_B404_41EC_6E982AFCB338"},{"areas":["this.HotspotPanoramaOverlayArea_F92D620D_E943_EC1B_41D4_08722C388F00"],"data":{"label":"link","hasPanoramaAction":true},"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":6,"distance":50,"yaw":-98.55,"image":"this.res_FB0E90CF_E95E_AC1C_41E2_A2BCD74C8501","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-2.37,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_F92301F0_E943_EC04_41C2_57F57DEDBECA"},{"areas":["this.HotspotPanoramaOverlayArea_E7731386_E946_EC0F_41DD_4969C5020320"],"data":{"label":"link","hasPanoramaAction":true},"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":6,"distance":50,"yaw":129.01,"image":"this.res_FB0E90CF_E95E_AC1C_41E2_A2BCD74C8501","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-4.17,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_E79D9332_E946_EC04_41BC_4BAFD91202AC"},{"areas":["this.HotspotPanoramaOverlayArea_E6786B09_E945_5C04_41EC_1B1C1A947D11"],"data":{"label":"link","hasPanoramaAction":true},"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":6,"distance":50,"yaw":-80.82,"image":"this.res_FB0E90CF_E95E_AC1C_41E2_A2BCD74C8501","horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-3.09,"scaleMode":"fit_inside"}],"maps":[],"id":"overlay_E67A2B01_E945_5C04_41C9_639C319C2536"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A_camera","media":"this.panorama_E0DF1C8B_E93F_D404_41D6_E6CE1A58D64A","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","id":"PanoramaPlayListItem_FBBF7164_E95E_AC0C_41E2_A02961517340"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4_camera","media":"this.panorama_E3A3F9F0_E93F_BC04_41E6_09FD75BF16F4","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","id":"PanoramaPlayListItem_FBBF5164_E95E_AC0C_41D6_402320BEAC57"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_E4CF399B_E942_DC04_41D4_F68DEE066352"},{"id":"res_FB0E90CF_E95E_AC1C_41E2_A2BCD74C8501","class":"ImageResource","levels":[{"height":141,"width":141,"class":"ImageResourceLevel","url":"media/res_FB0E90CF_E95E_AC1C_41E2_A2BCD74C8501_0.png"}]},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_E6753B77_E945_FC0C_41D6_2108FBA152CB"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_FBBF5164_E95E_AC0C_41D6_402320BEAC57, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_E7B53E0F_E942_B41C_41E5_647500A50508"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_FBBF7164_E95E_AC0C_41E2_A02961517340, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_F92D620D_E943_EC1B_41D4_08722C388F00"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_E7731386_E946_EC0F_41DD_4969C5020320"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_E6786B09_E945_5C04_41EC_1B1C1A947D11"}],"backgroundColorDirection":"vertical","backgroundColorRatios":[0],"minWidth":20,"shadow":false,"width":"100%","vrPolyfillScale":1,"buttonToggleFullscreen":"this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","mediaActivationMode":"window","paddingTop":0,"id":"rootPlayer","backgroundOpacity":1,"horizontalAlign":"left","paddingBottom":0,"mouseWheelEnabled":true,"gap":10,"mobileMipmappingEnabled":false,"scripts":{"takeScreenshot":TDV.Tour.Script.takeScreenshot,"translate":TDV.Tour.Script.translate,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizShowScore":TDV.Tour.Script.quizShowScore,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"isPanorama":TDV.Tour.Script.isPanorama,"historyGoForward":TDV.Tour.Script.historyGoForward,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaByName":TDV.Tour.Script.getMediaByName,"getKey":TDV.Tour.Script.getKey,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"shareSocial":TDV.Tour.Script.shareSocial,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"openLink":TDV.Tour.Script.openLink,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"resumePlayers":TDV.Tour.Script.resumePlayers,"playAudioList":TDV.Tour.Script.playAudioList,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"downloadFile":TDV.Tour.Script.downloadFile,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setValue":TDV.Tour.Script.setValue,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cloneCamera":TDV.Tour.Script.cloneCamera,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"registerKey":TDV.Tour.Script.registerKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizStart":TDV.Tour.Script.quizStart,"quizFinish":TDV.Tour.Script.quizFinish,"showWindow":TDV.Tour.Script.showWindow,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"mixObject":TDV.Tour.Script.mixObject,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getOverlays":TDV.Tour.Script.getOverlays,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPixels":TDV.Tour.Script.getPixels,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"initQuiz":TDV.Tour.Script.initQuiz,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setLocale":TDV.Tour.Script.setLocale,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"existsKey":TDV.Tour.Script.existsKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupImage":TDV.Tour.Script.showPopupImage,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"initAnalytics":TDV.Tour.Script.initAnalytics},"paddingLeft":0,"scrollBarMargin":2,"propagateClick":false,"verticalAlign":"top","paddingRight":0,"overflow":"hidden","downloadEnabled":false,"scrollBarOpacity":0.5,"backgroundColor":["#000000"],"contentOpaque":false,"height":"100%","children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.IconButton_AC819C46_BF7C_0354_415E_028207B038AC","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"layout":"absolute","toolTipHorizontalAlign":"center","backgroundPreloadEnabled":true,"scrollBarWidth":10,"defaultVRPointer":"gaze","scrollBarVisible":"rollOver","creationPolicy":"inAdvance","class":"Player","desktopMipmappingEnabled":false,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89,this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF].forEach(function(component) { component.set('visible', false); }) }","scrollBarColor":"#000000","borderSize":0,"minHeight":20,"data":{"locales":{"fr":"locale/fr.txt"},"name":"Player28156","defaultLocale":"fr","initialScale":0.65,"textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"pitch":1,"rate":1}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Wed Jun 5 2024