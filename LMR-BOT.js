/*
 * TERMS OF REPRODUCTION USE
 *
 * Failure to follow these terms will result in me getting very angry at you
 * and having your software tweaked or removed if possible. Either way, you're
 * still an idiot for not following such a basic rule.
 * NO EVENT SHALL THE AUTHORS
 * BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */
 
/*
 * NOTE:  DO NOT CHANGE ANYTHING ON THIS SCRIPT OR THE AUTHOR!
 * 
 * CONTACT THE AUTHOR BEFORE EDITING ANYTHING ON THIS SCRIPT ANYTHING THAT ARE AND WILL BE CHANGED BY A DIFFERENT AUTHOR
 * WILL FACE THE CONSEQUENCES!
 *
 * @Author         SyntaxLV [LMR Manager]
 *
 */
 
 
var path = 'http://pastebin.com/raw.php?i=';
 
 
function print(msg)
{
  $('#chat-messages').append('<div class="chat-update"><span class="chat-text" style="color:#ed1515;font-weight:bold">' + msg + '</span></div>');
}
 
var scriptFail = window.setTimeout(function() {
    print('@LRMB: Notikusi kļūda');
  }, 2000);

 
$.getScript(path + 'L2ncmf3D' , function() {API.chatLog("LMRB Ieslēgts",true);
  window.clearTimeout(scriptFail);
});
