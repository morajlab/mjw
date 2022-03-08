import java.math.BigInteger;
import java.io.File;
import java.security.MessageDigest;
import org.apache.commons.io.FileUtils;

public class Cache {
  private final static String cache_dir_prefix = ".cache";
  private static String key;

  Cache(String key) {
    key = key;
  }

  public static int main(String[] args) {
    key = args[0];

    if (createDir()) {
      return 0;
    }

    return 1;
  }

  public static boolean clean() {
    FileUtils.deleteDirectory(new File(destination));
  }

  public static boolean clean(boolean all) {}

  public static boolean createDir() {
    File cache_dir = new File(cache_dir_prefix + "/" + createHash());

    if (!cache_dir.exists()) {
      cache_dir.mkdirs();

      return true;
    }

    return false;
  }

  private static String createHash() {
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

      return hash_string;
    } catch(Exception ex) {
      // pass
    }

    return hash_string;
  }
}

