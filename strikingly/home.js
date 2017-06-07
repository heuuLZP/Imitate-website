import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "a": {
        "textDecoration": "none"
    },
    "seven": {
        "width": "42%"
    },
    "nine": {
        "width": "54%"
    },
    "sixteen": {
        "width": "98%"
    },
    "section": {
        "paddingTop": 70,
        "paddingRight": 0,
        "paddingBottom": 70,
        "paddingLeft": 0
    },
    "sectiontop": {
        "paddingTop": 120,
        "position": "relative",
        "overflow": "hidden"
    },
    "sectionpurple": {
        "background": "#5a4776 url(https://static-assets.strikinglycdn.com/images/landing2/blank.png) top center no-repeat",
        "textAlign": "center"
    },
    "sectionpurple bg-video-shade": {
        "opacity": 0,
        "content": "' '",
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "background": "rgba(49,40,72,0.6)",
        "zIndex": 2
    },
    "sectionpurple spread": {
        "backgroundImage": "url(https://static-assets.strikinglycdn.com/images/landing4/spread.jpg)",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "backgroundSize": "cover",
        "opacity": 0.075
    },
    "sectionpurple iframe": {
        "width": "100%",
        "height": "100%",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "zIndex": 1
    },
    "sectiontop container": {
        "width": "82%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "maxWidth": 1500,
        "position": "relative",
        "zIndex": 10,
        "overflow": "hidden"
    },
    "sectiontop container columns": {
        "float": "left",
        "display": "inline",
        "marginLeft": "1.04166666%",
        "marginRight": "1.04166666%",
        "textAlign": "center"
    },
    "sectionpurple logo": {
        "marginBottom": 60,
        "position": "relative",
        "zIndex": 1
    },
    "sectiontop h1": {
        "fontSize": 50,
        "marginBottom": 20
    },
    "sectionpurple tagline": {
        "color": "#d2c4f9",
        "fontSize": 22,
        "lineHeight": 1.7,
        "marginBottom": 60,
        "textShadow": "0 1px 5px rgba(0,0,0,0.15)"
    },
    "sectiontop learn-more": {
        "fontFamily": "'brandon',sans-serif",
        "textTransform": "uppercase",
        "fontSize": 15,
        "color": "#b4a8d6",
        "letterSpacing": 2,
        "marginTop": 75,
        "cursor": "pointer",
        "position": "relative"
    },
    "sectiontop learn-more arrow": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "WebkitTransform": "scaleY(.66)",
        "transform": "scaleY(.66)"
    },
    "sectiontop learn-more arrow:before": {
        "content": "' '",
        "display": "inline-block",
        "width": 24,
        "height": 24,
        "border": "1px solid #c8bbee",
        "borderTop": 0,
        "borderLeft": 0,
        "WebkitTransform": "rotate(45deg)",
        "transform": "rotate(45deg)"
    },
    "sep-dualsep-gray:before": {
        "background": "#f0f4f8"
    },
    "sep-dualsep-gray:after": {
        "background": "#f0f4f8"
    },
    "sep-dual:before": {
        "content": "' '",
        "display": "block",
        "width": 2000,
        "height": 250,
        "background": "#fff",
        "position": "absolute",
        "left": "50%",
        "bottom": -130,
        "zIndex": 2,
        "transform": "rotate(-7deg)"
    },
    "sep-dual:after": {
        "content": "' '",
        "display": "block",
        "width": 2000,
        "height": 250,
        "background": "#fff",
        "position": "absolute",
        "left": "50%",
        "bottom": -130,
        "zIndex": 2,
        "transform": "rotate(7deg)",
        "marginLeft": -2000
    },
    "sectiongray": {
        "background": "#f0f4f8"
    },
    "sectiongray container": {
        "position": "relative",
        "width": "82%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "maxWidth": 1500
    },
    "sectiongray title-group": {
        "textAlign": "center",
        "marginBottom": 60
    },
    "sectiongray btn-link": {
        "textAlign": "center",
        "marginBottom": 60
    },
    "sectiongray btn-link a": {
        "display": "inline-block",
        "zoom": 1,
        "fontFamily": "'brandon',sans-serif",
        "fontWeight": "400",
        "border": "1px solid #8367ac",
        "paddingTop": 6,
        "paddingRight": 18,
        "paddingBottom": 6,
        "paddingLeft": 18,
        "letterSpacing": 1,
        "color": "#8367ac",
        "borderRadius": 3,
        "fontSize": "100%",
        "transition": "all .15s"
    },
    "sectiongray btn-link a:hover": {
        "borderColor": "#a481d7",
        "color": "#a481d7",
        "background": "rgba(255,255,255,0.5)"
    },
    "sectiongray profile-row": {
        "marginBottom": 80,
        "zoom": 1,
        "position": "relative",
        "width": "100%",
        "display": "flex"
    },
    "columns": {
        "float": "left",
        "display": "inline",
        "marginLeft": "2.04166666%",
        "marginRight": "2.04166666%"
    },
    "profile-column": {
        "alignItems": "center"
    },
    "monitor-wrapper": {
        "position": "relative"
    },
    "phone": {
        "position": "absolute",
        "width": "21%",
        "top": "31%",
        "left": "78%",
        "paddingTop": "4%",
        "paddingRight": ".5%",
        "paddingBottom": "4%",
        "paddingLeft": ".5%",
        "borderRadius": 16,
        "border": "2px solid #9fa5ad",
        "background": "linear-gradient(to bottom left,#fff,#e0e6e8)",
        "zIndex": 10
    },
    "phone-inner": {
        "position": "relative",
        "paddingBottom": "166.67%",
        "boxShadow": "0 0 1px rgba(0,0,0,0.2)"
    },
    "phone-inner img": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "zIndex": 1
    },
    "monitor": {
        "paddingTop": "3%",
        "paddingRight": "3%",
        "paddingBottom": "3%",
        "paddingLeft": "3%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "maxWidth": "88%",
        "position": "relative",
        "borderRadius": 10,
        "border": "2px solid #9fa5ad",
        "background": "linear-gradient(to bottom left,#ecf2f4,#d0d5d7)"
    },
    "monitor-inner": {
        "position": "relative",
        "paddingBottom": "60%",
        "boxShadow": "0 0 1px rgba(0,0,0,0.2)"
    },
    "monitor-inner img": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "zIndex": 1
    },
    "monitor-inner:after": {
        "content": "' '",
        "display": "block",
        "position": "absolute",
        "bottom": "-17%",
        "width": "118%",
        "left": "-9%",
        "height": "18%",
        "background": "linear-gradient(to bottom,#ecf2f4,#b7bcc6 20%,#838b97)",
        "marginTop": 5,
        "borderRadius": 1000,
        "WebkitTransformStyle": "preserve-3d",
        "transformStyle": "preserve-3d",
        "WebkitTransform": "perspective(300px) rotateX(-75deg)",
        "transform": "perspective(300px) rotateX(-75deg)",
        "boxShadow": "inset 0 3px #7f848a, 0 40px 150px rgba(0,0,0,0.15)"
    },
    "profile": {
        "marginTop": "1%",
        "maxWidth": "80%"
    },
    "profile img": {
        "display": "inline-block",
        "maxHeight": 100,
        "height": "auto",
        "width": 100,
        "borderRadius": 100,
        "marginBottom": 15
    },
    "profile h4": {
        "fontWeight": "600",
        "fontSize": 20,
        "marginBottom": 10,
        "color": "#5f3f39"
    },
    "profile ptitle": {
        "color": "#ad8379",
        "fontWeight": "600",
        "marginBottom": 10
    },
    "profile pquote": {
        "fontSize": 16,
        "lineHeight": 1.7
    },
    "profile-rowright": {
        "flexDirection": "row-reverse"
    }
});