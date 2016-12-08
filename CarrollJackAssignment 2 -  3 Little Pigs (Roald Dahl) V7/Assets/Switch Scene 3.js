import UnityEngine.SceneManagement;
#pragma strict

function OnTriggerEnter (col : Collider)
 {
   if(col.gameObject.name == "Wolf")
    {
     Destroy(gameObject);
     SceneManager.LoadScene("Scene 4");
    }
}