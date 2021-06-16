import bcrypt from "bcryptjs"

const data = {
  users: [
    {
      name: "admin",
      email: "admin@example.com",
      password: bcrypt.hashSync("password"),
      isAdmin: true,
    },
    {
      name: "user",
      email: "user@example.com",
      password: bcrypt.hashSync("123"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Amazon Basics Kids Bedding Nap Set with Llama Pillow and Fleece Throw Blanket",
      category: "Houseware",
      image: "uploads\\2021-06-1071JryAghqiL._AC_UL320_.jpg",
      price: 24,
      brand: "Amazon",
      countInStock: 10,
      rating: 4.9,
      numReviews: 235,
      description: `- 100% Polyester
- Imported
- Kids throw blanket and pillow set for naps, travel, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Kid-friendly designs for a fun, whimsical experience
- Plush 100% polyester construction
- All-season warmth and breathability`,
    },
    {
      name: "Amazon Basics Kids Easy-Wash Microfiber Bed-in-a-Bag Bedding Set - Full/Queen, Magical Mermaids",
      category: "Houseware",
      image: "uploads\\2021-06-1081N-e3F5x6L._AC_UL320_.jpg",
      price: 49,
      brand: "Amazon",
      countInStock: 20,
      rating: 4.0,
      numReviews: 70,
      description: `- Imported
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Includes a comforter (90 x 90 inches), flat sheet (90 x 102 inches), fitted sheet (60 x 80 inches), pillowcase x 2 (20 x 30 inches), and sham x 2 (20 x 26 inches)
- Fabric is made of 100% polyester microfiber for a soft and gentle feel; comforter filling is 100% polyester for cozy warmth
- All-around elastic on the 14-inch fitted sheet allows for a snug, secure fit on most mattress sizes (up to 16 inches deep)
- Made in Green factory, an independent certification system that ensures textiles meet high safety and environmental standards
- Machine wash in warm water and tumble dry on low heat (use only non-chlorine bleach when needed); backed by an Amazon Basics 1-year limited warranty`,
    },
    {
      name: "Amazon Basics Kids Jumping Dolphins Patterned Throw Blanket with Stuffed Animal Dolphin",
      category: "Houseware",
      image: "uploads\\2021-06-10810bPfyI30L._AC_UL320_.jpg",
      price: 23,
      brand: "Amazon",
      countInStock: 15,
      rating: 4.5,
      numReviews: 302,
      description: `- 100% Polyester
- Imported
- Cozy 100% polyester kids throw blanket with matching stuffed animal toy
- Dimensions measure 60 x 50 inches; machine washable
- Fun, themed design your child will love
- Great for naps, travel, or cuddling up on the couch for movie night
- Velcro closures make the blanket easy to carry, store, and transport`,
    },
    {
      name: "Amazon Basics Kids Ultra-Soft Micromink Sherpa Blanket - Twin, Dino Friends",
      category: "Houseware",
      image: "uploads\\2021-06-1081Bz2O5AmGL._AC_UL320_.jpg",
      price: 28.99,
      brand: "Amazon",
      countInStock: 0,
      rating: 4.7,
      numReviews: 214,
      description: `- Imported
- Ultra-soft kids twin-sized blanket for bedroom, playroom, naps, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Dino Friends Kids collection for easy decorating
- Kid-friendly designs offer a fun, whimsical pop of color
- Plush 100% polyester micromink sherpa on one side, smooth, cozy flannel on the reverse
- All-season durability, warmth, and breathability
- Easy to care for; machine wash cold, tumble dry on low
- Dimensions measure 60 x 80 inches`,
    },
    {
      name: "Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black",
      category: "Computer",
      image: "uploads\\2021-06-10519rzl-wIQL.jpg",
      price: 129.99,
      brand: "Acer",
      countInStock: 12,
      rating: 4.5,
      numReviews: 5316,
      description: `- 23.8" Full HD IPS widescreen with 1920 x 1080 resolution
- Response time: 4ms, refresh rate: 60 hertz, pixel pitch: 0.2745 millimeter. 178 degree wide viewing angle, display colors: 16.7 million
- The zero frame design provides maximum visibility of the screen from edge to edge
- Signal inputs: 1 x HDMI, 1 x DVI (withHDCP) & 1 x VGA. Does not support HDCP 2.2, the version this monitor supports is HDCP 1.4
- No picture visible using the OSD menu, adjust brightness and contrast to maximum or reset to their default settings. Brightness is 250 nit. Operating power consumption: 25 watts`,
    },
    {
      name: "Ledger Nano S - The Best Crypto Hardware Wallet - Secure and Manage Your Bitcoin, Ethereum, ERC20 and Many Other Coins",
      category: "IT access",
      image: "uploads\\2021-06-1031Ikl-fF5PL.jpg",
      price: 20,
      brand: "Ledger",
      countInStock: 26,
      rating: 5,
      numReviews: 201,
      description: `- Cryptocurrency Hardware Wallet: allows you to send and receive crypto assets, securely and conveniently. Your Ledger hardware wallet can easily be connected into a computer and managed through the Ledger Live companion app. The Ledger Nano S keeps your private keys protected
- Secure: Your confidential data is never exposed: it is stored inside a strongly isolated Secure Chip, and locked by an 8 digit PIN code
- Multicurrency: enables you to manage multiple assets on the same device, and supports over 30 cryptocurrencies and all ERC20 tokens`,
    },
    {
      name: "Amazon Basics Kids Bedding Nap Set with Llama Pillow and Fleece Throw Blanket 1",
      category: "Houseware",
      image: "uploads\\2021-06-1071JryAghqiL._AC_UL320_.jpg",
      price: 24,
      brand: "Amazon",
      countInStock: 10,
      rating: 4.9,
      numReviews: 235,
      description: `- 100% Polyester
- Imported
- Kids throw blanket and pillow set for naps, travel, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Kid-friendly designs for a fun, whimsical experience
- Plush 100% polyester construction
- All-season warmth and breathability`,
    },
    {
      name: "Amazon Basics Kids Easy-Wash Microfiber Bed-in-a-Bag Bedding Set - Full/Queen, Magical Mermaids 1",
      category: "Houseware",
      image: "uploads\\2021-06-1081N-e3F5x6L._AC_UL320_.jpg",
      price: 49,
      brand: "Amazon",
      countInStock: 20,
      rating: 4.0,
      numReviews: 70,
      description: `- Imported
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Includes a comforter (90 x 90 inches), flat sheet (90 x 102 inches), fitted sheet (60 x 80 inches), pillowcase x 2 (20 x 30 inches), and sham x 2 (20 x 26 inches)
- Fabric is made of 100% polyester microfiber for a soft and gentle feel; comforter filling is 100% polyester for cozy warmth
- All-around elastic on the 14-inch fitted sheet allows for a snug, secure fit on most mattress sizes (up to 16 inches deep)
- Made in Green factory, an independent certification system that ensures textiles meet high safety and environmental standards
- Machine wash in warm water and tumble dry on low heat (use only non-chlorine bleach when needed); backed by an Amazon Basics 1-year limited warranty`,
    },
    {
      name: "Amazon Basics Kids Jumping Dolphins Patterned Throw Blanket with Stuffed Animal Dolphin 1",
      category: "Houseware",
      image: "uploads\\2021-06-10810bPfyI30L._AC_UL320_.jpg",
      price: 23,
      brand: "Amazon",
      countInStock: 15,
      rating: 4.5,
      numReviews: 302,
      description: `- 100% Polyester
- Imported
- Cozy 100% polyester kids throw blanket with matching stuffed animal toy
- Dimensions measure 60 x 50 inches; machine washable
- Fun, themed design your child will love
- Great for naps, travel, or cuddling up on the couch for movie night
- Velcro closures make the blanket easy to carry, store, and transport`,
    },
    {
      name: "Amazon Basics Kids Ultra-Soft Micromink Sherpa Blanket - Twin, Dino Friends 1",
      category: "Houseware",
      image: "uploads\\2021-06-1081Bz2O5AmGL._AC_UL320_.jpg",
      price: 28.99,
      brand: "Amazon",
      countInStock: 0,
      rating: 4.7,
      numReviews: 214,
      description: `- Imported
- Ultra-soft kids twin-sized blanket for bedroom, playroom, naps, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Dino Friends Kids collection for easy decorating
- Kid-friendly designs offer a fun, whimsical pop of color
- Plush 100% polyester micromink sherpa on one side, smooth, cozy flannel on the reverse
- All-season durability, warmth, and breathability
- Easy to care for; machine wash cold, tumble dry on low
- Dimensions measure 60 x 80 inches`,
    },
    {
      name: "Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black 1",
      category: "Computer",
      image: "uploads\\2021-06-10519rzl-wIQL.jpg",
      price: 129.99,
      brand: "Acer",
      countInStock: 12,
      rating: 4.5,
      numReviews: 5316,
      description: `- 23.8" Full HD IPS widescreen with 1920 x 1080 resolution
- Response time: 4ms, refresh rate: 60 hertz, pixel pitch: 0.2745 millimeter. 178 degree wide viewing angle, display colors: 16.7 million
- The zero frame design provides maximum visibility of the screen from edge to edge
- Signal inputs: 1 x HDMI, 1 x DVI (withHDCP) & 1 x VGA. Does not support HDCP 2.2, the version this monitor supports is HDCP 1.4
- No picture visible using the OSD menu, adjust brightness and contrast to maximum or reset to their default settings. Brightness is 250 nit. Operating power consumption: 25 watts`,
    },
    {
      name: "Ledger Nano S - The Best Crypto Hardware Wallet - Secure and Manage Your Bitcoin, Ethereum, ERC20 and Many Other Coins 1",
      category: "IT access",
      image: "uploads\\2021-06-1031Ikl-fF5PL.jpg",
      price: 20,
      brand: "Ledger",
      countInStock: 26,
      rating: 5,
      numReviews: 201,
      description: `- Cryptocurrency Hardware Wallet: allows you to send and receive crypto assets, securely and conveniently. Your Ledger hardware wallet can easily be connected into a computer and managed through the Ledger Live companion app. The Ledger Nano S keeps your private keys protected
- Secure: Your confidential data is never exposed: it is stored inside a strongly isolated Secure Chip, and locked by an 8 digit PIN code
- Multicurrency: enables you to manage multiple assets on the same device, and supports over 30 cryptocurrencies and all ERC20 tokens`,
    },
    {
      name: "Amazon Basics Kids Bedding Nap Set with Llama Pillow and Fleece Throw Blanket 2",
      category: "Houseware",
      image: "uploads\\2021-06-1071JryAghqiL._AC_UL320_.jpg",
      price: 24,
      brand: "Amazon",
      countInStock: 10,
      rating: 4.9,
      numReviews: 235,
      description: `- 100% Polyester
- Imported
- Kids throw blanket and pillow set for naps, travel, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Kid-friendly designs for a fun, whimsical experience
- Plush 100% polyester construction
- All-season warmth and breathability`,
    },
    {
      name: "Amazon Basics Kids Easy-Wash Microfiber Bed-in-a-Bag Bedding Set - Full/Queen, Magical Mermaids 2",
      category: "Houseware",
      image: "uploads\\2021-06-1081N-e3F5x6L._AC_UL320_.jpg",
      price: 49,
      brand: "Amazon",
      countInStock: 20,
      rating: 4.0,
      numReviews: 70,
      description: `- Imported
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Includes a comforter (90 x 90 inches), flat sheet (90 x 102 inches), fitted sheet (60 x 80 inches), pillowcase x 2 (20 x 30 inches), and sham x 2 (20 x 26 inches)
- Fabric is made of 100% polyester microfiber for a soft and gentle feel; comforter filling is 100% polyester for cozy warmth
- All-around elastic on the 14-inch fitted sheet allows for a snug, secure fit on most mattress sizes (up to 16 inches deep)
- Made in Green factory, an independent certification system that ensures textiles meet high safety and environmental standards
- Machine wash in warm water and tumble dry on low heat (use only non-chlorine bleach when needed); backed by an Amazon Basics 1-year limited warranty`,
    },
    {
      name: "Amazon Basics Kids Jumping Dolphins Patterned Throw Blanket with Stuffed Animal Dolphin 2",
      category: "Houseware",
      image: "uploads\\2021-06-10810bPfyI30L._AC_UL320_.jpg",
      price: 23,
      brand: "Amazon",
      countInStock: 15,
      rating: 4.5,
      numReviews: 302,
      description: `- 100% Polyester
- Imported
- Cozy 100% polyester kids throw blanket with matching stuffed animal toy
- Dimensions measure 60 x 50 inches; machine washable
- Fun, themed design your child will love
- Great for naps, travel, or cuddling up on the couch for movie night
- Velcro closures make the blanket easy to carry, store, and transport`,
    },
    {
      name: "Amazon Basics Kids Ultra-Soft Micromink Sherpa Blanket - Twin, Dino Friends 2",
      category: "Houseware",
      image: "uploads\\2021-06-1081Bz2O5AmGL._AC_UL320_.jpg",
      price: 28.99,
      brand: "Amazon",
      countInStock: 0,
      rating: 4.7,
      numReviews: 214,
      description: `- Imported
- Ultra-soft kids twin-sized blanket for bedroom, playroom, naps, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Dino Friends Kids collection for easy decorating
- Kid-friendly designs offer a fun, whimsical pop of color
- Plush 100% polyester micromink sherpa on one side, smooth, cozy flannel on the reverse
- All-season durability, warmth, and breathability
- Easy to care for; machine wash cold, tumble dry on low
- Dimensions measure 60 x 80 inches`,
    },
    {
      name: "Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black 2",
      category: "Computer",
      image: "uploads\\2021-06-10519rzl-wIQL.jpg",
      price: 129.99,
      brand: "Acer",
      countInStock: 12,
      rating: 4.5,
      numReviews: 5316,
      description: `- 23.8" Full HD IPS widescreen with 1920 x 1080 resolution
- Response time: 4ms, refresh rate: 60 hertz, pixel pitch: 0.2745 millimeter. 178 degree wide viewing angle, display colors: 16.7 million
- The zero frame design provides maximum visibility of the screen from edge to edge
- Signal inputs: 1 x HDMI, 1 x DVI (withHDCP) & 1 x VGA. Does not support HDCP 2.2, the version this monitor supports is HDCP 1.4
- No picture visible using the OSD menu, adjust brightness and contrast to maximum or reset to their default settings. Brightness is 250 nit. Operating power consumption: 25 watts`,
    },
    {
      name: "Ledger Nano S - The Best Crypto Hardware Wallet - Secure and Manage Your Bitcoin, Ethereum, ERC20 and Many Other Coins 2",
      category: "IT access",
      image: "uploads\\2021-06-1031Ikl-fF5PL.jpg",
      price: 20,
      brand: "Ledger",
      countInStock: 26,
      rating: 5,
      numReviews: 201,
      description: `- Cryptocurrency Hardware Wallet: allows you to send and receive crypto assets, securely and conveniently. Your Ledger hardware wallet can easily be connected into a computer and managed through the Ledger Live companion app. The Ledger Nano S keeps your private keys protected
- Secure: Your confidential data is never exposed: it is stored inside a strongly isolated Secure Chip, and locked by an 8 digit PIN code
- Multicurrency: enables you to manage multiple assets on the same device, and supports over 30 cryptocurrencies and all ERC20 tokens`,
    },
    {
      name: "Amazon Basics Kids Bedding Nap Set with Llama Pillow and Fleece Throw Blanket",
      category: "Houseware",
      image: "uploads\\2021-06-1071JryAghqiL._AC_UL320_.jpg",
      price: 24,
      brand: "Amazon",
      countInStock: 10,
      rating: 4.9,
      numReviews: 235,
      description: `- 100% Polyester
- Imported
- Kids throw blanket and pillow set for naps, travel, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Kid-friendly designs for a fun, whimsical experience
- Plush 100% polyester construction
- All-season warmth and breathability`,
    },
    {
      name: "Amazon Basics Kids Easy-Wash Microfiber Bed-in-a-Bag Bedding Set - Full/Queen, Magical Mermaids",
      category: "Houseware",
      image: "uploads\\2021-06-1081N-e3F5x6L._AC_UL320_.jpg",
      price: 49,
      brand: "Amazon",
      countInStock: 20,
      rating: 4.0,
      numReviews: 70,
      description: `- Imported
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Includes a comforter (90 x 90 inches), flat sheet (90 x 102 inches), fitted sheet (60 x 80 inches), pillowcase x 2 (20 x 30 inches), and sham x 2 (20 x 26 inches)
- Fabric is made of 100% polyester microfiber for a soft and gentle feel; comforter filling is 100% polyester for cozy warmth
- All-around elastic on the 14-inch fitted sheet allows for a snug, secure fit on most mattress sizes (up to 16 inches deep)
- Made in Green factory, an independent certification system that ensures textiles meet high safety and environmental standards
- Machine wash in warm water and tumble dry on low heat (use only non-chlorine bleach when needed); backed by an Amazon Basics 1-year limited warranty`,
    },
    {
      name: "Amazon Basics Kids Jumping Dolphins Patterned Throw Blanket with Stuffed Animal Dolphin",
      category: "Houseware",
      image: "uploads\\2021-06-10810bPfyI30L._AC_UL320_.jpg",
      price: 23,
      brand: "Amazon",
      countInStock: 15,
      rating: 4.5,
      numReviews: 302,
      description: `- 100% Polyester
- Imported
- Cozy 100% polyester kids throw blanket with matching stuffed animal toy
- Dimensions measure 60 x 50 inches; machine washable
- Fun, themed design your child will love
- Great for naps, travel, or cuddling up on the couch for movie night
- Velcro closures make the blanket easy to carry, store, and transport`,
    },
    {
      name: "Amazon Basics Kids Ultra-Soft Micromink Sherpa Blanket - Twin, Dino Friends",
      category: "Houseware",
      image: "uploads\\2021-06-1081Bz2O5AmGL._AC_UL320_.jpg",
      price: 28.99,
      brand: "Amazon",
      countInStock: 0,
      rating: 4.7,
      numReviews: 214,
      description: `- Imported
- Ultra-soft kids twin-sized blanket for bedroom, playroom, naps, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Dino Friends Kids collection for easy decorating
- Kid-friendly designs offer a fun, whimsical pop of color
- Plush 100% polyester micromink sherpa on one side, smooth, cozy flannel on the reverse
- All-season durability, warmth, and breathability
- Easy to care for; machine wash cold, tumble dry on low
- Dimensions measure 60 x 80 inches`,
    },
    {
      name: "Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black",
      category: "Computer",
      image: "uploads\\2021-06-10519rzl-wIQL.jpg",
      price: 129.99,
      brand: "Acer",
      countInStock: 12,
      rating: 4.5,
      numReviews: 5316,
      description: `- 23.8" Full HD IPS widescreen with 1920 x 1080 resolution
- Response time: 4ms, refresh rate: 60 hertz, pixel pitch: 0.2745 millimeter. 178 degree wide viewing angle, display colors: 16.7 million
- The zero frame design provides maximum visibility of the screen from edge to edge
- Signal inputs: 1 x HDMI, 1 x DVI (withHDCP) & 1 x VGA. Does not support HDCP 2.2, the version this monitor supports is HDCP 1.4
- No picture visible using the OSD menu, adjust brightness and contrast to maximum or reset to their default settings. Brightness is 250 nit. Operating power consumption: 25 watts`,
    },
    {
      name: "Ledger Nano S - The Best Crypto Hardware Wallet - Secure and Manage Your Bitcoin, Ethereum, ERC20 and Many Other Coins",
      category: "IT access",
      image: "uploads\\2021-06-1031Ikl-fF5PL.jpg",
      price: 20,
      brand: "Ledger",
      countInStock: 26,
      rating: 5,
      numReviews: 201,
      description: `- Cryptocurrency Hardware Wallet: allows you to send and receive crypto assets, securely and conveniently. Your Ledger hardware wallet can easily be connected into a computer and managed through the Ledger Live companion app. The Ledger Nano S keeps your private keys protected
- Secure: Your confidential data is never exposed: it is stored inside a strongly isolated Secure Chip, and locked by an 8 digit PIN code
- Multicurrency: enables you to manage multiple assets on the same device, and supports over 30 cryptocurrencies and all ERC20 tokens`,
    },
    {
      name: "Amazon Basics Kids Bedding Nap Set with Llama Pillow and Fleece Throw Blanket 1",
      category: "Houseware",
      image: "uploads\\2021-06-1071JryAghqiL._AC_UL320_.jpg",
      price: 24,
      brand: "Amazon",
      countInStock: 10,
      rating: 4.9,
      numReviews: 235,
      description: `- 100% Polyester
- Imported
- Kids throw blanket and pillow set for naps, travel, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Kid-friendly designs for a fun, whimsical experience
- Plush 100% polyester construction
- All-season warmth and breathability`,
    },
    {
      name: "Amazon Basics Kids Easy-Wash Microfiber Bed-in-a-Bag Bedding Set - Full/Queen, Magical Mermaids 1",
      category: "Houseware",
      image: "uploads\\2021-06-1081N-e3F5x6L._AC_UL320_.jpg",
      price: 49,
      brand: "Amazon",
      countInStock: 20,
      rating: 4.0,
      numReviews: 70,
      description: `- Imported
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Includes a comforter (90 x 90 inches), flat sheet (90 x 102 inches), fitted sheet (60 x 80 inches), pillowcase x 2 (20 x 30 inches), and sham x 2 (20 x 26 inches)
- Fabric is made of 100% polyester microfiber for a soft and gentle feel; comforter filling is 100% polyester for cozy warmth
- All-around elastic on the 14-inch fitted sheet allows for a snug, secure fit on most mattress sizes (up to 16 inches deep)
- Made in Green factory, an independent certification system that ensures textiles meet high safety and environmental standards
- Machine wash in warm water and tumble dry on low heat (use only non-chlorine bleach when needed); backed by an Amazon Basics 1-year limited warranty`,
    },
    {
      name: "Amazon Basics Kids Jumping Dolphins Patterned Throw Blanket with Stuffed Animal Dolphin 1",
      category: "Houseware",
      image: "uploads\\2021-06-10810bPfyI30L._AC_UL320_.jpg",
      price: 23,
      brand: "Amazon",
      countInStock: 15,
      rating: 4.5,
      numReviews: 302,
      description: `- 100% Polyester
- Imported
- Cozy 100% polyester kids throw blanket with matching stuffed animal toy
- Dimensions measure 60 x 50 inches; machine washable
- Fun, themed design your child will love
- Great for naps, travel, or cuddling up on the couch for movie night
- Velcro closures make the blanket easy to carry, store, and transport`,
    },
    {
      name: "Amazon Basics Kids Ultra-Soft Micromink Sherpa Blanket - Twin, Dino Friends 1",
      category: "Houseware",
      image: "uploads\\2021-06-1081Bz2O5AmGL._AC_UL320_.jpg",
      price: 28.99,
      brand: "Amazon",
      countInStock: 0,
      rating: 4.7,
      numReviews: 214,
      description: `- Imported
- Ultra-soft kids twin-sized blanket for bedroom, playroom, naps, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Dino Friends Kids collection for easy decorating
- Kid-friendly designs offer a fun, whimsical pop of color
- Plush 100% polyester micromink sherpa on one side, smooth, cozy flannel on the reverse
- All-season durability, warmth, and breathability
- Easy to care for; machine wash cold, tumble dry on low
- Dimensions measure 60 x 80 inches`,
    },
    {
      name: "Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black 1",
      category: "Computer",
      image: "uploads\\2021-06-10519rzl-wIQL.jpg",
      price: 129.99,
      brand: "Acer",
      countInStock: 12,
      rating: 4.5,
      numReviews: 5316,
      description: `- 23.8" Full HD IPS widescreen with 1920 x 1080 resolution
- Response time: 4ms, refresh rate: 60 hertz, pixel pitch: 0.2745 millimeter. 178 degree wide viewing angle, display colors: 16.7 million
- The zero frame design provides maximum visibility of the screen from edge to edge
- Signal inputs: 1 x HDMI, 1 x DVI (withHDCP) & 1 x VGA. Does not support HDCP 2.2, the version this monitor supports is HDCP 1.4
- No picture visible using the OSD menu, adjust brightness and contrast to maximum or reset to their default settings. Brightness is 250 nit. Operating power consumption: 25 watts`,
    },
    {
      name: "Ledger Nano S - The Best Crypto Hardware Wallet - Secure and Manage Your Bitcoin, Ethereum, ERC20 and Many Other Coins 1",
      category: "IT access",
      image: "uploads\\2021-06-1031Ikl-fF5PL.jpg",
      price: 20,
      brand: "Ledger",
      countInStock: 26,
      rating: 5,
      numReviews: 201,
      description: `- Cryptocurrency Hardware Wallet: allows you to send and receive crypto assets, securely and conveniently. Your Ledger hardware wallet can easily be connected into a computer and managed through the Ledger Live companion app. The Ledger Nano S keeps your private keys protected
- Secure: Your confidential data is never exposed: it is stored inside a strongly isolated Secure Chip, and locked by an 8 digit PIN code
- Multicurrency: enables you to manage multiple assets on the same device, and supports over 30 cryptocurrencies and all ERC20 tokens`,
    },
    {
      name: "Amazon Basics Kids Bedding Nap Set with Llama Pillow and Fleece Throw Blanket 2",
      category: "Houseware",
      image: "uploads\\2021-06-1071JryAghqiL._AC_UL320_.jpg",
      price: 24,
      brand: "Amazon",
      countInStock: 10,
      rating: 4.9,
      numReviews: 235,
      description: `- 100% Polyester
- Imported
- Kids throw blanket and pillow set for naps, travel, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Kid-friendly designs for a fun, whimsical experience
- Plush 100% polyester construction
- All-season warmth and breathability`,
    },
    {
      name: "Amazon Basics Kids Easy-Wash Microfiber Bed-in-a-Bag Bedding Set - Full/Queen, Magical Mermaids 2",
      category: "Houseware",
      image: "uploads\\2021-06-1081N-e3F5x6L._AC_UL320_.jpg",
      price: 49,
      brand: "Amazon",
      countInStock: 20,
      rating: 4.0,
      numReviews: 70,
      description: `- Imported
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Includes a comforter (90 x 90 inches), flat sheet (90 x 102 inches), fitted sheet (60 x 80 inches), pillowcase x 2 (20 x 30 inches), and sham x 2 (20 x 26 inches)
- Fabric is made of 100% polyester microfiber for a soft and gentle feel; comforter filling is 100% polyester for cozy warmth
- All-around elastic on the 14-inch fitted sheet allows for a snug, secure fit on most mattress sizes (up to 16 inches deep)
- Made in Green factory, an independent certification system that ensures textiles meet high safety and environmental standards
- Machine wash in warm water and tumble dry on low heat (use only non-chlorine bleach when needed); backed by an Amazon Basics 1-year limited warranty`,
    },
    {
      name: "Amazon Basics Kids Jumping Dolphins Patterned Throw Blanket with Stuffed Animal Dolphin 2",
      category: "Houseware",
      image: "uploads\\2021-06-10810bPfyI30L._AC_UL320_.jpg",
      price: 23,
      brand: "Amazon",
      countInStock: 15,
      rating: 4.5,
      numReviews: 302,
      description: `- 100% Polyester
- Imported
- Cozy 100% polyester kids throw blanket with matching stuffed animal toy
- Dimensions measure 60 x 50 inches; machine washable
- Fun, themed design your child will love
- Great for naps, travel, or cuddling up on the couch for movie night
- Velcro closures make the blanket easy to carry, store, and transport`,
    },
    {
      name: "Amazon Basics Kids Ultra-Soft Micromink Sherpa Blanket - Twin, Dino Friends 2",
      category: "Houseware",
      image: "uploads\\2021-06-1081Bz2O5AmGL._AC_UL320_.jpg",
      price: 28.99,
      brand: "Amazon",
      countInStock: 0,
      rating: 4.7,
      numReviews: 214,
      description: `- Imported
- Ultra-soft kids twin-sized blanket for bedroom, playroom, naps, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Dino Friends Kids collection for easy decorating
- Kid-friendly designs offer a fun, whimsical pop of color
- Plush 100% polyester micromink sherpa on one side, smooth, cozy flannel on the reverse
- All-season durability, warmth, and breathability
- Easy to care for; machine wash cold, tumble dry on low
- Dimensions measure 60 x 80 inches`,
    },
    {
      name: "Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black 2",
      category: "Computer",
      image: "uploads\\2021-06-10519rzl-wIQL.jpg",
      price: 129.99,
      brand: "Acer",
      countInStock: 12,
      rating: 4.5,
      numReviews: 5316,
      description: `- 23.8" Full HD IPS widescreen with 1920 x 1080 resolution
- Response time: 4ms, refresh rate: 60 hertz, pixel pitch: 0.2745 millimeter. 178 degree wide viewing angle, display colors: 16.7 million
- The zero frame design provides maximum visibility of the screen from edge to edge
- Signal inputs: 1 x HDMI, 1 x DVI (withHDCP) & 1 x VGA. Does not support HDCP 2.2, the version this monitor supports is HDCP 1.4
- No picture visible using the OSD menu, adjust brightness and contrast to maximum or reset to their default settings. Brightness is 250 nit. Operating power consumption: 25 watts`,
    },
    {
      name: "Ledger Nano S - The Best Crypto Hardware Wallet - Secure and Manage Your Bitcoin, Ethereum, ERC20 and Many Other Coins 2",
      category: "IT access",
      image: "uploads\\2021-06-1031Ikl-fF5PL.jpg",
      price: 20,
      brand: "Ledger",
      countInStock: 26,
      rating: 5,
      numReviews: 201,
      description: `- Cryptocurrency Hardware Wallet: allows you to send and receive crypto assets, securely and conveniently. Your Ledger hardware wallet can easily be connected into a computer and managed through the Ledger Live companion app. The Ledger Nano S keeps your private keys protected
- Secure: Your confidential data is never exposed: it is stored inside a strongly isolated Secure Chip, and locked by an 8 digit PIN code
- Multicurrency: enables you to manage multiple assets on the same device, and supports over 30 cryptocurrencies and all ERC20 tokens`,
    },
    {
      name: "Amazon Basics Kids Bedding Nap Set with Llama Pillow and Fleece Throw Blanket",
      category: "Houseware",
      image: "uploads\\2021-06-1071JryAghqiL._AC_UL320_.jpg",
      price: 24,
      brand: "Amazon",
      countInStock: 10,
      rating: 4.9,
      numReviews: 235,
      description: `- 100% Polyester
- Imported
- Kids throw blanket and pillow set for naps, travel, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Kid-friendly designs for a fun, whimsical experience
- Plush 100% polyester construction
- All-season warmth and breathability`,
    },
    {
      name: "Amazon Basics Kids Easy-Wash Microfiber Bed-in-a-Bag Bedding Set - Full/Queen, Magical Mermaids",
      category: "Houseware",
      image: "uploads\\2021-06-1081N-e3F5x6L._AC_UL320_.jpg",
      price: 49,
      brand: "Amazon",
      countInStock: 20,
      rating: 4.0,
      numReviews: 70,
      description: `- Imported
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Includes a comforter (90 x 90 inches), flat sheet (90 x 102 inches), fitted sheet (60 x 80 inches), pillowcase x 2 (20 x 30 inches), and sham x 2 (20 x 26 inches)
- Fabric is made of 100% polyester microfiber for a soft and gentle feel; comforter filling is 100% polyester for cozy warmth
- All-around elastic on the 14-inch fitted sheet allows for a snug, secure fit on most mattress sizes (up to 16 inches deep)
- Made in Green factory, an independent certification system that ensures textiles meet high safety and environmental standards
- Machine wash in warm water and tumble dry on low heat (use only non-chlorine bleach when needed); backed by an Amazon Basics 1-year limited warranty`,
    },
    {
      name: "Amazon Basics Kids Jumping Dolphins Patterned Throw Blanket with Stuffed Animal Dolphin",
      category: "Houseware",
      image: "uploads\\2021-06-10810bPfyI30L._AC_UL320_.jpg",
      price: 23,
      brand: "Amazon",
      countInStock: 15,
      rating: 4.5,
      numReviews: 302,
      description: `- 100% Polyester
- Imported
- Cozy 100% polyester kids throw blanket with matching stuffed animal toy
- Dimensions measure 60 x 50 inches; machine washable
- Fun, themed design your child will love
- Great for naps, travel, or cuddling up on the couch for movie night
- Velcro closures make the blanket easy to carry, store, and transport`,
    },
    {
      name: "Amazon Basics Kids Ultra-Soft Micromink Sherpa Blanket - Twin, Dino Friends",
      category: "Houseware",
      image: "uploads\\2021-06-1081Bz2O5AmGL._AC_UL320_.jpg",
      price: 28.99,
      brand: "Amazon",
      countInStock: 0,
      rating: 4.7,
      numReviews: 214,
      description: `- Imported
- Ultra-soft kids twin-sized blanket for bedroom, playroom, naps, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Dino Friends Kids collection for easy decorating
- Kid-friendly designs offer a fun, whimsical pop of color
- Plush 100% polyester micromink sherpa on one side, smooth, cozy flannel on the reverse
- All-season durability, warmth, and breathability
- Easy to care for; machine wash cold, tumble dry on low
- Dimensions measure 60 x 80 inches`,
    },
    {
      name: "Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black",
      category: "Computer",
      image: "uploads\\2021-06-10519rzl-wIQL.jpg",
      price: 129.99,
      brand: "Acer",
      countInStock: 12,
      rating: 4.5,
      numReviews: 5316,
      description: `- 23.8" Full HD IPS widescreen with 1920 x 1080 resolution
- Response time: 4ms, refresh rate: 60 hertz, pixel pitch: 0.2745 millimeter. 178 degree wide viewing angle, display colors: 16.7 million
- The zero frame design provides maximum visibility of the screen from edge to edge
- Signal inputs: 1 x HDMI, 1 x DVI (withHDCP) & 1 x VGA. Does not support HDCP 2.2, the version this monitor supports is HDCP 1.4
- No picture visible using the OSD menu, adjust brightness and contrast to maximum or reset to their default settings. Brightness is 250 nit. Operating power consumption: 25 watts`,
    },
    {
      name: "Ledger Nano S - The Best Crypto Hardware Wallet - Secure and Manage Your Bitcoin, Ethereum, ERC20 and Many Other Coins",
      category: "IT access",
      image: "uploads\\2021-06-1031Ikl-fF5PL.jpg",
      price: 20,
      brand: "Ledger",
      countInStock: 26,
      rating: 5,
      numReviews: 201,
      description: `- Cryptocurrency Hardware Wallet: allows you to send and receive crypto assets, securely and conveniently. Your Ledger hardware wallet can easily be connected into a computer and managed through the Ledger Live companion app. The Ledger Nano S keeps your private keys protected
- Secure: Your confidential data is never exposed: it is stored inside a strongly isolated Secure Chip, and locked by an 8 digit PIN code
- Multicurrency: enables you to manage multiple assets on the same device, and supports over 30 cryptocurrencies and all ERC20 tokens`,
    },
    {
      name: "Amazon Basics Kids Bedding Nap Set with Llama Pillow and Fleece Throw Blanket 1",
      category: "Houseware",
      image: "uploads\\2021-06-1071JryAghqiL._AC_UL320_.jpg",
      price: 24,
      brand: "Amazon",
      countInStock: 10,
      rating: 4.9,
      numReviews: 235,
      description: `- 100% Polyester
- Imported
- Kids throw blanket and pillow set for naps, travel, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Kid-friendly designs for a fun, whimsical experience
- Plush 100% polyester construction
- All-season warmth and breathability`,
    },
    {
      name: "Amazon Basics Kids Easy-Wash Microfiber Bed-in-a-Bag Bedding Set - Full/Queen, Magical Mermaids 1",
      category: "Houseware",
      image: "uploads\\2021-06-1081N-e3F5x6L._AC_UL320_.jpg",
      price: 49,
      brand: "Amazon",
      countInStock: 20,
      rating: 4.0,
      numReviews: 70,
      description: `- Imported
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Includes a comforter (90 x 90 inches), flat sheet (90 x 102 inches), fitted sheet (60 x 80 inches), pillowcase x 2 (20 x 30 inches), and sham x 2 (20 x 26 inches)
- Fabric is made of 100% polyester microfiber for a soft and gentle feel; comforter filling is 100% polyester for cozy warmth
- All-around elastic on the 14-inch fitted sheet allows for a snug, secure fit on most mattress sizes (up to 16 inches deep)
- Made in Green factory, an independent certification system that ensures textiles meet high safety and environmental standards
- Machine wash in warm water and tumble dry on low heat (use only non-chlorine bleach when needed); backed by an Amazon Basics 1-year limited warranty`,
    },
    {
      name: "Amazon Basics Kids Jumping Dolphins Patterned Throw Blanket with Stuffed Animal Dolphin 1",
      category: "Houseware",
      image: "uploads\\2021-06-10810bPfyI30L._AC_UL320_.jpg",
      price: 23,
      brand: "Amazon",
      countInStock: 15,
      rating: 4.5,
      numReviews: 302,
      description: `- 100% Polyester
- Imported
- Cozy 100% polyester kids throw blanket with matching stuffed animal toy
- Dimensions measure 60 x 50 inches; machine washable
- Fun, themed design your child will love
- Great for naps, travel, or cuddling up on the couch for movie night
- Velcro closures make the blanket easy to carry, store, and transport`,
    },
    {
      name: "Amazon Basics Kids Ultra-Soft Micromink Sherpa Blanket - Twin, Dino Friends 1",
      category: "Houseware",
      image: "uploads\\2021-06-1081Bz2O5AmGL._AC_UL320_.jpg",
      price: 28.99,
      brand: "Amazon",
      countInStock: 0,
      rating: 4.7,
      numReviews: 214,
      description: `- Imported
- Ultra-soft kids twin-sized blanket for bedroom, playroom, naps, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Dino Friends Kids collection for easy decorating
- Kid-friendly designs offer a fun, whimsical pop of color
- Plush 100% polyester micromink sherpa on one side, smooth, cozy flannel on the reverse
- All-season durability, warmth, and breathability
- Easy to care for; machine wash cold, tumble dry on low
- Dimensions measure 60 x 80 inches`,
    },
    {
      name: "Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black 1",
      category: "Computer",
      image: "uploads\\2021-06-10519rzl-wIQL.jpg",
      price: 129.99,
      brand: "Acer",
      countInStock: 12,
      rating: 4.5,
      numReviews: 5316,
      description: `- 23.8" Full HD IPS widescreen with 1920 x 1080 resolution
- Response time: 4ms, refresh rate: 60 hertz, pixel pitch: 0.2745 millimeter. 178 degree wide viewing angle, display colors: 16.7 million
- The zero frame design provides maximum visibility of the screen from edge to edge
- Signal inputs: 1 x HDMI, 1 x DVI (withHDCP) & 1 x VGA. Does not support HDCP 2.2, the version this monitor supports is HDCP 1.4
- No picture visible using the OSD menu, adjust brightness and contrast to maximum or reset to their default settings. Brightness is 250 nit. Operating power consumption: 25 watts`,
    },
    {
      name: "Ledger Nano S - The Best Crypto Hardware Wallet - Secure and Manage Your Bitcoin, Ethereum, ERC20 and Many Other Coins 1",
      category: "IT access",
      image: "uploads\\2021-06-1031Ikl-fF5PL.jpg",
      price: 20,
      brand: "Ledger",
      countInStock: 26,
      rating: 5,
      numReviews: 201,
      description: `- Cryptocurrency Hardware Wallet: allows you to send and receive crypto assets, securely and conveniently. Your Ledger hardware wallet can easily be connected into a computer and managed through the Ledger Live companion app. The Ledger Nano S keeps your private keys protected
- Secure: Your confidential data is never exposed: it is stored inside a strongly isolated Secure Chip, and locked by an 8 digit PIN code
- Multicurrency: enables you to manage multiple assets on the same device, and supports over 30 cryptocurrencies and all ERC20 tokens`,
    },
    {
      name: "Amazon Basics Kids Bedding Nap Set with Llama Pillow and Fleece Throw Blanket 2",
      category: "Houseware",
      image: "uploads\\2021-06-1071JryAghqiL._AC_UL320_.jpg",
      price: 24,
      brand: "Amazon",
      countInStock: 10,
      rating: 4.9,
      numReviews: 235,
      description: `- 100% Polyester
- Imported
- Kids throw blanket and pillow set for naps, travel, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Kid-friendly designs for a fun, whimsical experience
- Plush 100% polyester construction
- All-season warmth and breathability`,
    },
    {
      name: "Amazon Basics Kids Easy-Wash Microfiber Bed-in-a-Bag Bedding Set - Full/Queen, Magical Mermaids 2",
      category: "Houseware",
      image: "uploads\\2021-06-1081N-e3F5x6L._AC_UL320_.jpg",
      price: 49,
      brand: "Amazon",
      countInStock: 20,
      rating: 4.0,
      numReviews: 70,
      description: `- Imported
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Kids collection for easy decorating
- Includes a comforter (90 x 90 inches), flat sheet (90 x 102 inches), fitted sheet (60 x 80 inches), pillowcase x 2 (20 x 30 inches), and sham x 2 (20 x 26 inches)
- Fabric is made of 100% polyester microfiber for a soft and gentle feel; comforter filling is 100% polyester for cozy warmth
- All-around elastic on the 14-inch fitted sheet allows for a snug, secure fit on most mattress sizes (up to 16 inches deep)
- Made in Green factory, an independent certification system that ensures textiles meet high safety and environmental standards
- Machine wash in warm water and tumble dry on low heat (use only non-chlorine bleach when needed); backed by an Amazon Basics 1-year limited warranty`,
    },
    {
      name: "Amazon Basics Kids Jumping Dolphins Patterned Throw Blanket with Stuffed Animal Dolphin 2",
      category: "Houseware",
      image: "uploads\\2021-06-10810bPfyI30L._AC_UL320_.jpg",
      price: 23,
      brand: "Amazon",
      countInStock: 15,
      rating: 4.5,
      numReviews: 302,
      description: `- 100% Polyester
- Imported
- Cozy 100% polyester kids throw blanket with matching stuffed animal toy
- Dimensions measure 60 x 50 inches; machine washable
- Fun, themed design your child will love
- Great for naps, travel, or cuddling up on the couch for movie night
- Velcro closures make the blanket easy to carry, store, and transport`,
    },
    {
      name: "Amazon Basics Kids Ultra-Soft Micromink Sherpa Blanket - Twin, Dino Friends 2",
      category: "Houseware",
      image: "uploads\\2021-06-1081Bz2O5AmGL._AC_UL320_.jpg",
      price: 28.99,
      brand: "Amazon",
      countInStock: 0,
      rating: 4.7,
      numReviews: 214,
      description: `- Imported
- Ultra-soft kids twin-sized blanket for bedroom, playroom, naps, and more
- Mix and match with a variety of bedding, bath, storage and decor products from the Amazon Basics Dino Friends Kids collection for easy decorating
- Kid-friendly designs offer a fun, whimsical pop of color
- Plush 100% polyester micromink sherpa on one side, smooth, cozy flannel on the reverse
- All-season durability, warmth, and breathability
- Easy to care for; machine wash cold, tumble dry on low
- Dimensions measure 60 x 80 inches`,
    },
    {
      name: "Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor, Black 2",
      category: "Computer",
      image: "uploads\\2021-06-10519rzl-wIQL.jpg",
      price: 129.99,
      brand: "Acer",
      countInStock: 12,
      rating: 4.5,
      numReviews: 5316,
      description: `- 23.8" Full HD IPS widescreen with 1920 x 1080 resolution
- Response time: 4ms, refresh rate: 60 hertz, pixel pitch: 0.2745 millimeter. 178 degree wide viewing angle, display colors: 16.7 million
- The zero frame design provides maximum visibility of the screen from edge to edge
- Signal inputs: 1 x HDMI, 1 x DVI (withHDCP) & 1 x VGA. Does not support HDCP 2.2, the version this monitor supports is HDCP 1.4
- No picture visible using the OSD menu, adjust brightness and contrast to maximum or reset to their default settings. Brightness is 250 nit. Operating power consumption: 25 watts`,
    },
    {
      name: "Ledger Nano S - The Best Crypto Hardware Wallet - Secure and Manage Your Bitcoin, Ethereum, ERC20 and Many Other Coins 2",
      category: "IT access",
      image: "uploads\\2021-06-1031Ikl-fF5PL.jpg",
      price: 20,
      brand: "Ledger",
      countInStock: 26,
      rating: 5,
      numReviews: 201,
      description: `- Cryptocurrency Hardware Wallet: allows you to send and receive crypto assets, securely and conveniently. Your Ledger hardware wallet can easily be connected into a computer and managed through the Ledger Live companion app. The Ledger Nano S keeps your private keys protected
- Secure: Your confidential data is never exposed: it is stored inside a strongly isolated Secure Chip, and locked by an 8 digit PIN code
- Multicurrency: enables you to manage multiple assets on the same device, and supports over 30 cryptocurrencies and all ERC20 tokens`,
    },
  ]
}

export default data