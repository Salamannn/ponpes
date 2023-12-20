import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import Navbar from "../components/Navbar"; // Asumsi Navbar.js berada di direktori components
import Footer from "../components/Footer"; // Asumsi Footer.js berada di direktori components
// import { ScrollView } from 'react-native-gesture-handler';

const PrincipleCard = ({ backgroundColor, title, content }) => (
  <View style={[styles.cardContainer, { backgroundColor }]}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardContent}>{content}</Text>
  </View>
);

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <ScrollView style={styles.container}>
        <Image
          source={require("../assets/hero.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>PONDOK PESANTREN AL BARAKAH</Text>
          <Text style={styles.subtitle}>
            Menciptakan Generasi Kuat Spiritual dan Intelektual
          </Text>
        </View>
        <View style={styles.valuesContainer}>
          <Text style={styles.valuesTitle}>
            Nilai Luhur Santri Pondok Pesantren Al Barakah
          </Text>
          <Text style={styles.valuesText}>
            Allah SWT sudah menetapkan kejayaan, kesuksesan, kebahagiaan,
            kegembiraan, dan kesempurnaan manusia di dunia dan di akhirat cukup
            hanya mengamalkan agama Islam secara sempurna. Agama Islam yang
            sangat sempurna adalah, agama yang dibawa oleh baginda Rasulullah
            SAW. Menyangkup iman, ibadah, pekerjaan atau muamalah, muasyarah,
            dan yang terakhir adalah ahlaq karena itulah Santri Pondok Pesantren
            Al Barakah memegang Prinsip Nilai Luhur sebagaimana yang dimiliki
            oleh Para Sahabat di zaman Rasulullah SAW Sebagai berikut :
          </Text>
        </View>
        <View style={styles.principlesContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <PrincipleCard
              backgroundColor="#43A046"
              title="Yakin atas kalimah thoyyibah"
              content="Mengeluarkan keyakinan pada mahluk dari dalam hati dan memasukkan keyakinan hanya kepada Allah SWT. Di dalam hati. Meyakini hanya satu-satunya jalan untuk mencapai kejayaan dunia dan akherat hanya dengan cara ikut sunnah Rasulullah SAW."
            />
            <PrincipleCard
              backgroundColor="#43A046"
              title="Sholat khusyu’ dan khudlu’"
              content="Shalat dengan konsentrasi batin dan merendahkan diri dengan mengikut cara yang dicontohkan oleh Rasulullah SAW. Membawa sifat-sifat ketaatan kepada Allah SWT didalam shalat kedalam kehidupan sehari-hari."
            />
            <PrincipleCard
              backgroundColor="#43A046"
              title="Ilmu ma’adzikir"
              content="Semua petunjuk datang dari Allah SWT melalui Baginda Rasulullah SAW. Mengingat Allah SWT sebagaimana agungnya Allah SWT. Mengamalkan perintah Allah SWT. Pada setiap saat dan keadaan dengan menghadirkan keagungan Allah didalam hati dan ikut cara Rasulullah SAW."
            />
          </ScrollView>
        </View>
        <View style={styles.kegiatancontainer}>
          <View style={styles.kegiatanheaderContainer}>
            <Text style={styles.kegiatanheaderText}>
              Kegiatan Pondok Pesantren
            </Text>
            <Text style={styles.kegiatandescriptionText}>
              Selama 24 jam Santri tinggal di Pondok Pesantren mengisi aktivitas
              dengan berbagai kegiatan yang bermanfaat untuk dirinya, keluarga
              serta masyarakat. Kegiatan mereka adalah sebagai berikut :
            </Text>
          </View>
          <View style={styles.kegiatanimageContainer}>
            {/* Example of an image block */}
            <View style={styles.kegiatanimageBlock}>
              <Image
                style={styles.kegiatanimage}
                source={require("../assets/kegiatan.png")}
              />
              <Text style={styles.kegiatanimageText}>
                Menerapkan Sunnah Makan Berjamaah Mendatangkan Keberkahan.
              </Text>
            </View>
          </View>
        </View>
        <Image
          source={require("../assets/bannerr.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.banner}>
          <Text style={styles.bannertitle}>Santri Today Leader Tomorrow</Text>
          <Text style={styles.bannersubtitle}>
          Melihat pergaulan bebas generasi muda di luar pesantren yang kian hari kian permisif dan mengkhawatirkan, pesantren dinilai sebagai lembaga pendidikan alternatif yang patut dilirik. Melihat moralitas generasi muda yang kian tergerus dan terdegradasi, lagi-lagi pesantren dinilai sebagai solusi terbaik. Termasuk ketika banyak generasi muda tak peduli lagi pada masa depannya, pesantren juga menjadi harapan. Tak heran karenanya, ramai beredar seruan “Ayo Mondok” yang didengungkan berbagai kalangan.
          </Text>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: "relative",
  },
  backgroundImage: {
    width: width,
    height: 630,
    //position: 'absolute', // Menggunakan Dimensions agar gambar menyesuaikan dengan ukuran layar
  },
  textContainer: {
    width: 799,
    height: 86,
    position: "absolute",
    top: 313, // Sesuaikan posisi ini sesuai kebutuhan tampilan Anda
    left: (width - 799) / 2, // Menempatkan teks di tengah secara horizontal
    alignItems: "center", // Menambahkan ini untuk memastikan teks terpusat jika container lebih lebar dari teks
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 48,
    fontFamily: "DM Sans",
    fontWeight: "700",
    width: 1000,
  },
  subtitle: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontFamily: "DM Sans",
    fontWeight: "500",
    position: "absolute",
    top: 55, // Posisi subtitle relatif terhadap container textContainer
    alignSelf: "center", // Menambahkan ini untuk memastikan teks terpusat secara horizontal
  },
  // Anda mungkin perlu menambahkan atau mengubah gaya yang ada untuk konten ScrollView
  valuesContainer: {
    width: "100%",
    paddingHorizontal: 200, // Untuk menggantikan 'gap' dan memberi ruang di sekeliling teks
    paddingVertical: 100,
    alignItems: "center",
  },
  valuesTitle: {
    color: "#103E13",
    fontSize: 48,
    fontFamily: "DM Sans",
    fontWeight: "700",
    letterSpacing: 0.5,
    // React Native tidak menggunakan wordWrap, textAlign menggantikan fungsi tersebut jika diperlukan
  },
  valuesText: {
    textAlign: "justify",
    color: "#1C1C1E",
    fontSize: 24,
    fontFamily: "DM Sans",
    fontWeight: "400",
    lineHeight: 34,
    letterSpacing: 0.5,
    // React Native tidak menggunakan wordWrap, textAlign menggantikan fungsi tersebut jika diperlukan
  },
  principlesContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 40,
    // marginHorizontal:180
  },
  cardContainer: {
    width: 387,
    height: 290,
    borderRadius: 15,
    padding: 20,
    marginVertical: 15,
    marginHorizontal: 50,
  },
  cardTitle: {
    color: "white",
    fontSize: 32,
    fontFamily: "DM Sans",
    fontWeight: "700",
    lineHeight: 35,
  },
  cardContent: {
    marginTop: 78, // calculated as top(99) - top(21) of title
    textAlign: "justify",
    color: "white",
    fontSize: 15,
    fontFamily: "DM Sans",
    fontWeight: "400",
    lineHeight: 20,
    textTransform: "capitalize",
  },

  ///style kegiatan
  kegiatancontainer: {
    flexDirection: "row",
    width: "100%",
    height: 329,
    justifyContent: "space-between",
    alignItems: "center",
  },
  kegiatanheaderContainer: {
    flex: 1,
    width: 1244,
    flexDirection: "column",
    alignItems: "center",
  },
  kegiatanheaderText: {
    fontSize: 48,
    fontFamily: "Rubik",
    fontWeight: "500",
    color: "#103E13",
    alignContent: "flex-start",
  },
  kegiatandescriptionText: {
    width: 757,
    textAlign: "justify",
    fontSize: 24,
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "400",
    color: "#1C1C1E",
  },
  kegiatanimageContainer: {
    width: 425,
    height: 329,
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 20,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: 15,
    // alignItems: "center",
  },
  kegiatanimageBlock: {
    width: 400,
    height: 301,
    position: "absolute",
    backgroundColor: "#43A046",
    borderRadius: 10,
  },
  kegiatanimage: {
    width: 400,
    height: 230,
    borderRadius: 10,
  },
  kegiatanimageText: {
    width: 393,
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontFamily: "Rubik",
    fontWeight: "400",
    lineHeight: 20,
    position: "absolute",
    top: 245,
  },
  //banner
  banner: {
    width: 799,
    height: 86,
    position: "absolute",
    bottom: 313, // Sesuaikan posisi ini sesuai kebutuhan tampilan Anda
    left: (width - 799) / 2, // Menempatkan teks di tengah secara horizontal
    alignItems: "center", // Menambahkan ini untuk memastikan teks terpusat jika container lebih lebar dari teks
  },
  bannertitle: {
    textAlign: "left",
    color: "white",
    fontSize: 48,
    fontFamily: "DM Sans",
    fontWeight: "700",
    width: 1000,
    marginLeft:-200,
  },
  bannersubtitle:{
    marginLeft:-200,
    width:1239,
    textAlign: "left",
    color: "white",
    fontSize: 24,
    fontFamily: "DM Sans",
    fontWeight: "500",
    position: "absolute",
    top: 55, // Posisi subtitle relatif terhadap container textContainer
    alignSelf: "flex-start", // Menambahkan ini untuk memastikan teks terpusat secara horizontal
  },
});

export default HomeScreen;
