function countProfit(shoppers) {
    // Database products
    const listBarang = [
      ['Sepatu Stacattu', 1500000, 10],
      ['Baju Zoro', 500000, 2],
      ['Sweater Uniklooh', 175000, 1],
    ]
  
    // Database Penjualan
    const sales = {};
  
    // Iterasi belanja customers
    /**
     * [
     *  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, // shopper 1
     *  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, // shopper 2
     *  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }, // shopper 3
     * ]
     */
    shoppers.forEach(shopper => {
      const product = listBarang.find(product => product[0] === shopper.product);
      // Check stock, apakah ready stok
      if (product[2] >= shopper.amount) {
        // Apakah product yang di beli, sudah ada di database penjualan
        if (!sales[shopper.product]) {
          // Kalo gak ada, masukkan product ke database penjualan dengan
          // default property shoppers dan sell
          sales[shopper.product] = { shoppers: [], sell: 0 }; // default value
        }
        // Setelah berhasil input ke database penjualan, masukkan nama pembeli
        // dan kurangi stok barang yang ada di database barang
        sales[shopper.product].shoppers.push(shopper.name); // Input nama pembeli di dalam database penjualan
        // 0 + shopper.amount = 0 + 2 = 2
        // 2 + shopper.amount = 2 + 3 = 5
        sales[shopper.product].sell += shopper.amount; // Tambahkan jumlah barang yang sudah terjual
        // product[2] itu reference ke listBarang[i][2]
        product[2] -= shopper.amount; // Kurangi stok yang ada di database barang
      }
    });
  
    // Setelah input ke database penjualan, maka hitung profit (laporan penjualan) dari setiap barang
    // Iterasi database products untuk di hitung profit nya
    /**
     * [
     *  ['Sepatu Stacattu', 1500000, 10], // product 1
     *  ['Baju Zoro', 500000, 2], // product 2
     *  ['Sweater Uniklooh', 175000, 1], // product 3
     * ];
     */
    const profits = listBarang.map(product => {
      //    [index 1 (productName), index 2 (price), index 3 (leftOver)]
      const [productName, price, leftOver] = product; // mendapatkan data product
      // Buat tampungan profit sementara untuk setiap iterasi product
      const profit = {
        product: productName,
        shoppers: [],
        leftOver,
        totalProfit: 0,
      };
      // check apakah product ada di database penjualan
      /**
       * sales = { 'Sepatu Stacattu': { shoppers: [], sell: 0 } }
       * sales[productName] = sales['Sepatu Stacattu'] => { shoppers: [], sell: 0 }
       */
      const saleProduct = sales[productName];
      // Jika ada, maka masukkan pembeli yang ada di database penjualan dan hitung profit
      if (saleProduct) {
        // profit.shoppers.push('Cindy', 'Smit');
        // gunakan destructuring
        profit.shoppers.push(...saleProduct.shoppers); // masukkan nama pembeli ke profit
        profit.totalProfit = price * saleProduct.sell; // hitung profit berdasarkan harga barang dan jumlah product yang terjual
      }
      // Kembalikan profit ke dalam penampungan profits
      return profit;
    });
    // setelah selesai hitung profit.
    // Selanjutnya, kembalikan nilai profits untuk countProfit
    return profits; // mengembalikan profits untuk countProfit;
  }
  
  // TEST CASES
  const hasil = countProfit([
    { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
    { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
    { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 },
  ]);
  
  console.log(hasil);
  
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]