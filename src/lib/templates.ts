export const templates = [
  {
    "name": "Product Showcase",
    "poster": "",
    "template": {
      "message": {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "generic",
            "elements": [
              {
                "title": "Wireless Headphones",
                "image_url": "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "subtitle": "Experience premium sound quality.",
                "buttons": [
                  {
                    "type": "web_url",
                    "url": "https://example.com/product/headphones",
                    "title": "Buy Now"
                  }
                ]
              },
              {
                "title": "Smart Watch",
                "image_url": "https://images.pexels.com/photos/277394/pexels-photo-277394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "subtitle": "Track your fitness in style.",
                "buttons": [
                  {
                    "type": "web_url",
                    "url": "https://example.com/product/smartwatch",
                    "title": "Buy Now"
                  }
                ]
              }
            ]
          }
        }
      }
    },
    slug:"generic"
  },
  {
    "name": "Simple Greeting",
    "poster": "",
    "template": {
      "message": {
        "text": "Hey 👋 Just wanted to say hi!"
      }
    },
        slug:"text"

  },
  {
    "name": "Promo with Button",
    "poster": "",
    "template": {
      "message": {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "Check out our latest offers 🔥",
            "buttons": [
              {
                "type": "web_url",
                "url": "https://example.com/offers",
                "title": "View Offers"
              }
            ]
          }
        }
      }
    },
        slug:"button"
  }
]
