import java.math.BigInteger;
import java.io.File;
import java.security.MessageDigest;
// import org.apache.commons.io.FileUtils;

public class Cache {
  private final String CACHE_DIR_PREFIX = ".cache";
  private final String key_hash;
  private final String key;

  public Cache(String key) {
    this.key = key;
    this.key_hash = getKeyHash();
  }

  // public static boolean clean() {
  //   FileUtils.deleteDirectory(new File(destination));
  // }

  // public static boolean clean(boolean all) {}

  public String getCachePath() {
    return this.CACHE_DIR_PREFIX + File.separator + getKeyHash();
  }

  public void init() {
    File cache_dir = new File(getCachePath());

    if (!cache_dir.exists()) {
      cache_dir.mkdirs();
    }
  }

  private String getKeyHash() {
    if (this.key_hash != null && !this.key_hash.isBlank()) {
      return this.key_hash;
    }

    String hash_string = "";

    try {
      byte[] key_bytes = key.getBytes("UTF-8");
      MessageDigest md = MessageDigest.getInstance("MD5");
      byte[] hash_digest = md.digest(key_bytes);
      BigInteger big_int = new BigInteger(1, hash_digest);
      hash_string = big_int.toString(16);

      while(hash_string.length() < 32){
        hash_string = "0" + hash_string;
      }
    } catch (Exception ex) {
      // Create your exception or re-throw ex object
    }

    return hash_string;
  }
}

