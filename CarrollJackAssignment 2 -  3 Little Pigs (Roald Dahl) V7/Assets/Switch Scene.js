import UnityEngine.SceneManagement;
#pragma strict

function OnTriggerEnter (col : Collider)
 {
   if(col.gameObject.name == "Triplet")
    {
     Destroy(gameObject);
     SceneManager.LoadScene("Scene 2");
    }
}