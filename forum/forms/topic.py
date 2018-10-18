from django import forms


class TopicForm(forms.Form):
    id = forms.IntegerField(required=True, max_value=3)
    plate_name = forms.CharField(required=True, max_length=20)
    topic_title = forms.CharField(required=True, max_length=50)
    topic_text = forms.TimeField(required=True)
