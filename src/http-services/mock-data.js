export default {
  data: [
    {
      _id: {
        $oid: "550970aa98ab571100b635a9"
      },
      picture: "cursor_outline.svg",
      name: "cursor_outline",
      slug: "cursor_outline",
      created: {
        $date: "2015-03-18T12:33:46.491Z"
      },
      tags: [],
      category: "icon",
      visibility: ["global"],
      elements: [
        {
          elementType: "icon",
          reference: "cursor_outline"
        }
      ],
      __v: 0
    },
    {
      _id: {
        $oid: "594a18feeb5a0e0011b55a30"
      },
      slug: "toms-template-headers",
      name: "Toms template headers",
      createdByUser: "534fd70294b7ec0b00000002",
      created: {
        $date: "2017-06-21T06:58:06.147Z"
      },
      tags: [],
      category: "symbol",
      visibility: [],
      elements: [
        {
          styles: {
            "z-index": 40,
            width: "18.954272460937375%",
            top: "115px",
            "text-align": "left",
            left: "34.55000000000001%",
            height: "25px",
            "font-weight": "bold",
            "font-size": "14px",
            "font-family": "weld-regular"
          },
          id: "text-1674",
          elementType: "text",
          data: {
            text: "Company page 1"
          }
        },
        {
          styles: {
            "z-index": 41,
            width: "18.954272460937375%",
            top: "115px",
            "text-align": "left",
            left: "56.55000000000001%",
            height: "25px",
            "font-weight": "bold",
            "font-size": "14px",
            "font-family": "weld-regular"
          },
          id: "text-1677",
          elementType: "text",
          data: {
            text: "Company page 2"
          }
        }
      ],
      __v: 0
    }
  ],
  elements: [
    {
      _id: {
        $oid: "55d74825d1fbc111005d748d"
      },
      slug: "minutemailer",
      name: "Minutemailer",
      html:
        '<form action="https://minutemailer.com/subscribe/{{minutemailer-id}}" method="post" class="minutemailer"><input type="email" name="email" placeholder="{{field-text}}"><button type="submit">{{button-text}}</button></form>',
      css:
        '.minutemailer {\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n}\n\n.minutemailer input[type="email"], .minutemailer button[type="submit"] {\n\twidth: 100%;\n\tmax-width: 300px;\n\tmargin: 0 10px;\n\tmargin-bottom: 10px;\n\theight: 40px;\n}\n\n.minutemailer button[type="submit"] {\n\tbackground-color: {{button-color}};\n\tborder: none;\n}\n.minutemailer button[type="submit"]:hover {\n\tbackground-color: {{button-color}};\n\tcursor: pointer;\n}\n\n.minutemailer input[type="email"] {\n\tcolor: #000;\n}\n\n.weld-canvas-container.edit-mode .minutemailer button[type="submit"] {\n\tpointer-events: none;\n}',
      data: {
        "button-color": "#6ec8dc",
        "field-text": "Your email",
        "button-text": "Subscribe",
        "minutemailer-id": ""
      },
      includes: [],
      created: {
        $date: "2015-08-21T15:47:49.000Z"
      },
      tags: [
        "subscription",
        "email",
        "mailchimp",
        "form",
        "not-inline-svg",
        "popular"
      ],
      visibility: ["global"],
      description:
        "Let users subscribe to your Minutemailer newsletter (requires account at minutemailer.com)",
      __v: 10,
      category: "object",
      createdByUser: "543bb0c03fd6190b00000002",
      picture: "minutemailer.png",
      events: []
    },
    {
      _id: {
        $oid: "55e964f9b439241100bedc3f"
      },
      slug: "soundcloud",
      name: "SoundCloud",
      html:
        '<iframe width="100%" height="100%" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{{trackId}}&amp;auto_play={{autoplay}}&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
      data: {
        autoplay: "false",
        trackId: 217890037
      },
      description: "Embed a SoundCloud audio player.",
      createdByUser: "534fd70294b7ec0b00000002",
      category: "object",
      includes: [],
      created: {
        $date: "2015-09-04T09:31:37.371Z"
      },
      tags: ["music", "audio", "sound", "not-inline-svg", "media"],
      picture: "soundcloud_object2.svg",
      visibility: ["global"],
      __v: 14,
      css:
        ".weld-canvas-container.edit-mode .soundcloud iframe {pointer-events: none;}",
      events: []
    }
  ]
};
