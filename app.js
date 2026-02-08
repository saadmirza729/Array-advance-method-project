const productData = [
    // COMPUTING (1-10)
    {
        id: 1,
        name: "Neural Link Laptop",
        price: 2499,
        cat: "Computing",
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
    },
    {
        id: 2,
        name: "Mechanical G15 Keyboard",
        price: 180,
        cat: "Computing",
        img: "https://bloodygaming.pk/cdn/shop/files/s98-blms-mechanical-gaming-keyboard-3223579.jpg?v=1761126367"
    },
    {
        id: 3,
        name: "Precision Pro Mouse",
        price: 120, cat: "Computing",
        img: "https://mustafacomputers.pk/cdn/shop/files/61_TtADta_L._AC_SL1500.jpg?v=1735647164&width=1946"
    },
    {
        id: 4,
        name: "Ultrawide 49\" Monitor",
        price: 1200,
        cat: "Computing",
        img: "https://assets.kogan.com/files/external/White_Label_Products/Kogan/KAMN49DFUCLA_9C.jpg?auto=webp&bg-color=fff&canvas=1200%2C800&dpr=1&enable=upscale&fit=bounds&height=800&quality=90&width=1200"
    },
    {
        id: 5,
        name: "Thunderbolt NVMe Hub",
        price: 250,
        cat: "Computing",
        img: "https://ae01.alicdn.com/kf/Hfd69e642606548ab9a44bec0623fd03cg.jpg"
    },
    {
        id: 6,
        name: "Titan Graphics Card",
        price: 1599,
        cat: "Computing",
        img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500"
    },
    {
        id: 7,
        name: "Aero Cooling Pad",
        price: 45,
        cat: "Computing",
        img: "https://m.media-amazon.com/images/I/71Q0+K6ugAL._AC_SL1500_.jpg"
    },
    {
        id: 8,
        name: "VR Horizon headset",
        price: 599,
        cat: "Computing",
        img: "https://dam.ee.co.uk/image/786263124743/image_vjn6oa9f1l02594kngdqb9bl3p/-S1568x1568-FWEBP"
    },
    {
        id: 9,
        name: "Stealth Web Cam",
        price: 199,
        cat: "Computing",
        img: "https://www.wolfeyes.com.au/cdn/shop/files/670-stealthcamfglb_0bd4fe00-0f52-4c30-9e7d-4ef70f149a46_1000x.jpg?v=1718696124"
    },
    {
        id: 10,
        name: "Ergo Desk Arm",
        price: 85,
        cat: "Computing",
        img: "https://sunaofe.com/cdn/shop/collections/sunaofe-dual-monitor-height-adjustable-desk.webp?v=1769063760&width=2048"
    },

    // AUDIO (11-20)
    {
        id: 11,
        name: "Sonic Zenith Headphones",
        price: 549, cat: "Audio",
        img: "https://sony.scene7.com/is/image/sonyglobalsolutions/PIP_Mobile_XBBN2_02?$productIntroPlatemobile$"
    },
    {
        id: 12,
        name: "Echo Pods Pro",
        price: 249,
        cat: "Audio",
        img: "https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg"
    },
    {
        id: 13,
        name: "Phantom Speaker",
        price: 899,
        cat: "Audio",
        img: "https://assets.devialet.com/soon/media/dvl_media/Visual_Devialet_Phantom_Ultimate_Product_08_STEREO_98_dB_DF_1x1_B_1.jpg?twic=v1/background=FFFFFF/cover=700x700"
    },
    {
        id: 14,
        name: "Vocal Master Mic",
        price: 350,
        cat: "Audio",
        img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500"
    },
    {
        id: 15,
        name: "Tube Amp Retro",
        price: 420,
        cat: "Audio",
        img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b3b7232b-7794-4c17-a3e7-726b4d06aaf5.__CR0,0,600,450_PT0_SX600_V1___.jpg"
    },
    {
        id: 16,
        name: "Acoustic Panels",
        price: 120,
        cat: "Audio",
        img: "https://overtoneacoustics.com/cdn/shop/files/Recording_Studio_-_2nd_image.jpg?v=1759307579"
    },
    {
        id: 17,
        name: "Mixer Console",
        price: 1100,
        cat: "Audio",
        img: "https://tascam.com/wp-content/uploads/images/products/_tascam/model_2400/model_2400_w_feature_01.jpg"
    },
    {
        id: 18,
        name: "Reference Monitors",
        price: 600,
        cat: "Audio",
        img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500"
    },
    {
        id: 19,
        name: "Wireless DAC",
        price: 210,
        cat: "Audio",
        img: "https://ae01.alicdn.com/kf/S2ed217b8d4c447158160aa570b0bf8dfi.jpg?width=800&height=989&hash=1789"
    },
    {
        id: 20,
        name: "Bass Boom Box",
        price: 150,
        cat: "Audio",
        img: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw89bb3106/pdp/JBL_Xtreme_4_Lifestyle_01_1605x1605px.png?sw=904&sh=560"
    },

    // WEARABLES (21-30)
    {
        id: 21,
        name: "Solar Watch X",
        price: 900,
        cat: "Wearables",
        img: "https://timex.ca/cdn/shop/files/11307_TX_TC_25_FB_mobile_TW2V00400.jpg?v=1759215025&width=768"
    },
    {
        id: 22,
        name: "Health Ring Pro",
        price: 299,
        cat: "Wearables",
        img: "https://img.ltwebstatic.com/images3_spmp/2024/10/18/2e/1729236633aef1f82bc12c7d0c19a3bcc323be9333_thumbnail_900x.jpg"
    },
    {
        id: 23,
        name: "AR Smart Lens",
        price: 1200,
        cat: "Wearables",
        img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500"
    },
    {
        id: 24,
        name: "Fitness Tracker 2",
        price: 95, cat: "Wearables",
        img: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=500"
    },
    {
        id: 25,
        name: "Bio-Sleep Band",
        price: 180, cat: "Wearables", img: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=500"
    },
    {
        id: 26,
        name: "Smart Glasses Pro",
        price: 499,
        cat: "Wearables",
        img: "https://zenn.com.my/wp-content/uploads/2024/02/20231023-101106-860x484-1.jpg"
    },
    {
        id: 27,
        name: "Digital Compass",
        price: 65,
        cat: "Wearables",
        img: "https://i.ebayimg.com/images/g/MWwAAOSw8OlkZOYz/s-l1200.webp"
    },
    {
        id: 28,
        name: "Gore-Tech Jacket",
        price: 350,
        cat: "Wearables",
        img: "https://www.stussy.com/cdn/shop/files/115880_BLAC_4.jpg?v=1770148353&width=1920"
    },
    {
        id: 29,
        name: "Haptic Feedback Gloves",
        price: 450,
        cat: "Wearables",
        img: "https://cdn.mos.cms.futurecdn.net/CNQRL36ZJFRyMMDozCrLcK-680-80.jpg"
    },
    {
        id: 30,
        name: "Cyber Boots",
        price: 220,
        cat: "Wearables",
        img: "https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vZTFiMjBjYTgtOGVmNS00MTAzLThjMGQtOGUxMjVjMjgxMGU4LmpwZWc.webp"
    }
];

// --- LOGIC ---
const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchBar');

// .map() to format price display
const products = productData.map(p => ({
    ...p,
    prettyPrice: `$${p.price.toLocaleString()}`
}));

function render(items) {
    grid.innerHTML = "";
    // .forEach() to build UI
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="image-box">
                <img src="${item.img}" alt="${item.name}">
                <span class="badge">${item.cat}</span>
            </div>
            <h3>${item.name}</h3>
            <p class="price">${item.prettyPrice}</p>
            <button class="btn-pro" onclick="details(${item.id})"><b>Inspect Product<b></button>
        `;
        grid.appendChild(card);
    });
}

function handleFilter() {
    const query = searchInput.value.toLowerCase();
    const activeCat = document.querySelector('.filter-btn.active').dataset.cat;

    // .filter() used for both search and category
    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(query);
        const matchesCat = (activeCat === 'all' || p.cat === activeCat);
        return matchesSearch && matchesCat;
    });
    render(filtered);
}

// .find() for details
window.details = (id) => {
    const item = products.find(p => p.id === id);
    alert(`MODEL: ${item.name}\nSPECS: Premium Grade ${item.cat}\nCOST: ${item.prettyPrice}`);
};

// Listeners
searchInput.addEventListener('input', handleFilter);
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        handleFilter();
    });
});

render(products);


window.filterByCat = (catName) => {
    // Ye function kisi bhi link se category filter kar dega
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        if (btn.dataset.cat === catName) {
            btn.click(); // Automatically trigger the filter button
        }
    });
};